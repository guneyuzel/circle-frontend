

"use client";
import { useWalletBalances } from "@/app/axios";
import {
  BackButton,
  Content,
  LoadingWrapper,
  TokenCard,
} from "@/app/components";
import { useRouter } from "next/navigation";
import { Typography } from "@mui/joy";

interface SelectTokenProps {
  walletId: string;
}

export const SelectToken = ({ walletId }: SelectTokenProps) => {
  const { data, isLoading } = useWalletBalances(walletId);
  const router = useRouter();
  const tokenBalances = data?.data.tokenBalances;

  const isGreaterThanZero = (amount = "") => {
    if (parseFloat(amount) > 0) {
      return true;
    }

    return false;
  };

  return (
    <LoadingWrapper isLoading={isLoading}>
      <Content>
        <nav>
          <BackButton onClick={router.back}>Select a token to send</BackButton>
        </nav>
        {tokenBalances && tokenBalances.length > 0 ? (
          <ul className='list-none space-y-2 px-0'>
            {tokenBalances.map((tokenBalance) =>
              isGreaterThanZero(tokenBalance.amount) ? (
                <li key={tokenBalance?.token.name}>
                  <TokenCard
                    amount={tokenBalance?.amount}
                    token={tokenBalance?.token}
                    onClick={() =>
                      router.push(
                        `/wallets/${walletId}/send/${encodeURIComponent(tokenBalance.token.name ?? "")}`,
                      )
                    }
                  />
                </li>
              ) : null,
            )}
          </ul>
        ) : (
          <Typography
            level='title-lg'
            className='text-neutral-400 text-center flex items-center justify-center gap-x-2 mt-6'
          >
            No Tokens yet
          </Typography>
        )}
      </Content>
    </LoadingWrapper>
  );
};
