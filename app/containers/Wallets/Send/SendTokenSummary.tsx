

import Image from "next/image";
import { formatDate, tokenHelper } from "@/app/shared/utils";
import { Button } from "@mui/joy";
import { Content, CopyButton, useSendTokenContext } from "@/app/components";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { BlockchainEnum, blockchainNames } from "@/app/shared/types";
import { TextField } from "@/app/components/TextField";

export const SendTokenSummary: React.FC = () => {
  const { tokenName, tokenAndRecipient } = useSendTokenContext();

  const imageSymbol = tokenHelper(tokenName);
  const router = useRouter();
  const date = useMemo(() => new Date(), []);
  return (
    <>
      <Content>
        <div className='flex flex-col items-center mb-4'>
          <Image
            className='mb-4'
            src={`/Success.gif`}
            width={80}
            height={80}
            alt='Success'
          />

          <span className='text-3xl text-center font-semibold max-w-80'>
            Sent {tokenAndRecipient.amount} {imageSymbol.symbol}
          </span>
        </div>
        <div className='grow flex flex-col gap-y-2'>
          <TextField
            value={tokenAndRecipient.address}
            label='To'
            endDecorator={<CopyButton copyValue={tokenAndRecipient.address} />}
            readOnly
          />
          <TextField
            value={blockchainNames[tokenAndRecipient.network as BlockchainEnum]}
            label='Network'
            readOnly
          />
          <TextField value={formatDate(date)} label='Date' readOnly />
        </div>
        <Button
          className='w-full'
          variant='solid'
          onClick={() => {
            router.push("/wallets");
          }}
        >
          Go to home
        </Button>
      </Content>
    </>
  );
};
