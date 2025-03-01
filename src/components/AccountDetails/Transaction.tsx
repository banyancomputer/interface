import { CheckCircleIcon, ExclamationIcon, XCircleIcon } from '@heroicons/react/outline'
import PrivateTransaction from 'app/components/AccountDetails/PrivateTransaction'
import ExternalLink from 'app/components/ExternalLink'
import Loader from 'app/components/Loader'
import Typography from 'app/components/Typography'
import { PrivateTxState } from 'app/entities/SushiGuard'
import { classNames, getExplorerLink } from 'app/functions'
import { isTxPending } from 'app/functions/transactions'
import { useActiveWeb3React } from 'app/services/web3'
import { useAllTransactions } from 'app/state/transactions/hooks'
import React, { FC } from 'react'

const Transaction: FC<{ hash: string }> = ({ hash }) => {
  const { chainId } = useActiveWeb3React()
  const allTransactions = useAllTransactions()

  const tx = allTransactions?.[hash]
  const summary = tx?.summary
  const privateTx = tx?.privateTx
  const pending = isTxPending(tx)
  const indeterminate = tx?.privateTx?.state === PrivateTxState.INDETERMINATE ?? false
  const error = tx?.privateTx?.state === PrivateTxState.ERROR ?? false
  const success =
    !pending &&
    !indeterminate &&
    !error &&
    tx &&
    (tx.receipt?.status === 1 || typeof tx.receipt?.status === 'undefined')
  const cancelled = tx?.receipt && tx.receipt.status === 1337

  if (!chainId) return null
  if (privateTx) return <PrivateTransaction tx={tx} />

  return (
    <div className="flex flex-col w-full py-1">
      <div className="flex gap-1 border-b border-b-[#2E2E2E] border-b-[2px] pb-2">
        <ExternalLink href={getExplorerLink(chainId, hash, 'transaction')} className="flex items-center gap-2">
          <div
            className={classNames(
              pending
                ? 'text-primary'
                : success
                ? 'text-green'
                : indeterminate
                ? 'text-yellow'
                : cancelled
                ? 'text-red'
                : 'text-red'
            )}
          >
            {pending ? (
              <Loader />
            ) : success ? (
              <CheckCircleIcon width={20} height={20} color="#746AFB" />
            ) : cancelled ? (
              <XCircleIcon width={20} height={20} />
            ) : (
              <ExclamationIcon width={20} height={20} />
            )}
          </div>
          <Typography
            variant="lg"
            weight={700}
            className="flex gap-1 items-center text-[#746AFB] py-0.5 font-mono uppercase"
          >
            {summary ?? hash}
          </Typography>
        </ExternalLink>
      </div>
    </div>
  )
}

export default Transaction
