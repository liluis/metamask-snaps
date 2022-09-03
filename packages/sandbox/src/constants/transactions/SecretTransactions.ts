export const SecretTransactions: any = {
  send: {
    fee: {
      gas: '80000',
    },
    memo: 'foobar',
    msg: [
      {
        type: 'cosmos-sdk/MsgSend',
        value: {
          amount: [
            {
              amount: '10000',
              denom: 'uscrt',
            },
          ],
          from_address: 'secret1vhtdhfmttwxlvu4ewueqt73tt8y9zv385fagty',
          to_address: 'secret1vhtdhfmttwxlvu4ewueqt73tt8y9zv385fagty',
        },
      },
    ],
    signatures: null,
  },
}