export const KavaTransactions: any = {
  send: {
    msg: [
      {
        type: 'cosmos-sdk/MsgSend',
        value: {
          amount: [
            {
              amount: '1000000',
              denom: 'ukava',
            },
          ],
          from_address: 'kava1l4ylj687wmm7d0mk2l29pf9y4k3f09v5zzl0tx',
          to_address: 'kava1ys70jvnajkv88529ys6urjcyle3k2j9r24g6a7',
        },
      },
    ],
    fee: {
      amount: [
        {
          amount: '1000',
          denom: 'ukava',
        },
      ],
      gas: '200000',
    },
    signatures: null,
    memo: '100942091',
  },
}