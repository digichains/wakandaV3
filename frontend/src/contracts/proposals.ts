/* eslint-disable */
/**
 * This file was automatically generated by @algorandfoundation/algokit-client-generator.
 * DO NOT MODIFY IT BY HAND.
 * requires: @algorandfoundation/algokit-utils: ^2
 */
import * as algokit from '@algorandfoundation/algokit-utils'
import type {
  ABIAppCallArg,
  AppCallTransactionResult,
  AppCallTransactionResultOfType,
  AppCompilationResult,
  AppReference,
  AppState,
  CoreAppCallArgs,
  RawAppCallArgs,
  TealTemplateParams,
} from '@algorandfoundation/algokit-utils/types/app'
import type {
  AppClientCallCoreParams,
  AppClientCompilationParams,
  AppClientDeployCoreParams,
  AppDetails,
  ApplicationClient,
} from '@algorandfoundation/algokit-utils/types/app-client'
import type { AppSpec } from '@algorandfoundation/algokit-utils/types/app-spec'
import type { SendTransactionResult, TransactionToSign, SendTransactionFrom } from '@algorandfoundation/algokit-utils/types/transaction'
import type { ABIResult, TransactionWithSigner } from 'algosdk'
import { Algodv2, OnApplicationComplete, Transaction, AtomicTransactionComposer, modelsv2 } from 'algosdk'
export const APP_SPEC: AppSpec = {
  "hints": {
    "add_proposal(string,string,uint64)void": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "read_proposal(string)(string,string,bool,uint64,uint64,uint64)": {
      "structs": {
        "output": {
          "name": "Proposal",
          "elements": [
            [
              "name",
              "string"
            ],
            [
              "description",
              "string"
            ],
            [
              "is_open",
              "bool"
            ],
            [
              "end_time",
              "uint64"
            ],
            [
              "yes_count",
              "uint64"
            ],
            [
              "no_count",
              "uint64"
            ]
          ]
        }
      },
      "call_config": {
        "no_op": "CALL"
      }
    },
    "vote_yes(string)void": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "vote_no(string)void": {
      "call_config": {
        "no_op": "CALL"
      }
    }
  },
  "source": {
    "approval": "I3ByYWdtYSB2ZXJzaW9uIDgKaW50Y2Jsb2NrIDAgMSAyOSA2NTUzNgpieXRlY2Jsb2NrIDB4IDB4MDAKdHhuIE51bUFwcEFyZ3MKaW50Y18wIC8vIDAKPT0KYm56IG1haW5fbDEwCnR4bmEgQXBwbGljYXRpb25BcmdzIDAKcHVzaGJ5dGVzIDB4N2NlMTJjMDIgLy8gImFkZF9wcm9wb3NhbChzdHJpbmcsc3RyaW5nLHVpbnQ2NCl2b2lkIgo9PQpibnogbWFpbl9sOQp0eG5hIEFwcGxpY2F0aW9uQXJncyAwCnB1c2hieXRlcyAweGQ3NzhhZDI1IC8vICJyZWFkX3Byb3Bvc2FsKHN0cmluZykoc3RyaW5nLHN0cmluZyxib29sLHVpbnQ2NCx1aW50NjQsdWludDY0KSIKPT0KYm56IG1haW5fbDgKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMApwdXNoYnl0ZXMgMHg0NGQwNzM5NSAvLyAidm90ZV95ZXMoc3RyaW5nKXZvaWQiCj09CmJueiBtYWluX2w3CnR4bmEgQXBwbGljYXRpb25BcmdzIDAKcHVzaGJ5dGVzIDB4MGUxODcwMzQgLy8gInZvdGVfbm8oc3RyaW5nKXZvaWQiCj09CmJueiBtYWluX2w2CmVycgptYWluX2w2Ogp0eG4gT25Db21wbGV0aW9uCmludGNfMCAvLyBOb09wCj09CnR4biBBcHBsaWNhdGlvbklECmludGNfMCAvLyAwCiE9CiYmCmFzc2VydApjYWxsc3ViIHZvdGVub2Nhc3Rlcl84CmludGNfMSAvLyAxCnJldHVybgptYWluX2w3Ogp0eG4gT25Db21wbGV0aW9uCmludGNfMCAvLyBOb09wCj09CnR4biBBcHBsaWNhdGlvbklECmludGNfMCAvLyAwCiE9CiYmCmFzc2VydApjYWxsc3ViIHZvdGV5ZXNjYXN0ZXJfNwppbnRjXzEgLy8gMQpyZXR1cm4KbWFpbl9sODoKdHhuIE9uQ29tcGxldGlvbgppbnRjXzAgLy8gTm9PcAo9PQp0eG4gQXBwbGljYXRpb25JRAppbnRjXzAgLy8gMAohPQomJgphc3NlcnQKY2FsbHN1YiByZWFkcHJvcG9zYWxjYXN0ZXJfNgppbnRjXzEgLy8gMQpyZXR1cm4KbWFpbl9sOToKdHhuIE9uQ29tcGxldGlvbgppbnRjXzAgLy8gTm9PcAo9PQp0eG4gQXBwbGljYXRpb25JRAppbnRjXzAgLy8gMAohPQomJgphc3NlcnQKY2FsbHN1YiBhZGRwcm9wb3NhbGNhc3Rlcl81CmludGNfMSAvLyAxCnJldHVybgptYWluX2wxMDoKdHhuIE9uQ29tcGxldGlvbgppbnRjXzAgLy8gTm9PcAo9PQpibnogbWFpbl9sMTIKZXJyCm1haW5fbDEyOgp0eG4gQXBwbGljYXRpb25JRAppbnRjXzAgLy8gMAo9PQphc3NlcnQKY2FsbHN1YiBjcmVhdGVfMAppbnRjXzEgLy8gMQpyZXR1cm4KCi8vIGNyZWF0ZQpjcmVhdGVfMDoKcHJvdG8gMCAwCnB1c2hieXRlcyAweDZkNjU2ZDYyNjU3MjczNjg2OTcwNWY3NDZmNmI2NTZlIC8vICJtZW1iZXJzaGlwX3Rva2VuIgpwdXNoYnl0ZXMgMHgzMTMyMzMzODM2MzEzMzM1MzUzNiAvLyAiMTIzODYxMzU1NiIKYXBwX2dsb2JhbF9wdXQKcmV0c3ViCgovLyBhZGRfcHJvcG9zYWwKYWRkcHJvcG9zYWxfMToKcHJvdG8gMyAwCmludGNfMCAvLyAwCmJ5dGVjXzAgLy8gIiIKaW50Y18wIC8vIDAKZHVwbiAzCmJ5dGVjXzAgLy8gIiIKZHVwCmludGNfMSAvLyAxCiEKIQpmcmFtZV9idXJ5IDAKaW50Y18wIC8vIDAKZnJhbWVfYnVyeSAyCmludGNfMCAvLyAwCmZyYW1lX2J1cnkgMwpmcmFtZV9kaWcgLTMKZnJhbWVfYnVyeSA3CmZyYW1lX2RpZyA3CmZyYW1lX2J1cnkgNgppbnRjXzIgLy8gMjkKZnJhbWVfYnVyeSA0CmZyYW1lX2RpZyA0CmZyYW1lX2RpZyA3CmxlbgorCmZyYW1lX2J1cnkgNQpmcmFtZV9kaWcgNQppbnRjXzMgLy8gNjU1MzYKPAphc3NlcnQKZnJhbWVfZGlnIDQKaXRvYgpleHRyYWN0IDYgMApmcmFtZV9kaWcgLTIKZnJhbWVfYnVyeSA3CmZyYW1lX2RpZyA2CmZyYW1lX2RpZyA3CmNvbmNhdApmcmFtZV9idXJ5IDYKZnJhbWVfZGlnIDUKZnJhbWVfYnVyeSA0CmZyYW1lX2RpZyA0Cml0b2IKZXh0cmFjdCA2IDAKY29uY2F0CmJ5dGVjXzEgLy8gMHgwMAppbnRjXzAgLy8gMApmcmFtZV9kaWcgMApzZXRiaXQKY29uY2F0CmZyYW1lX2RpZyAtMQppdG9iCmNvbmNhdApmcmFtZV9kaWcgMgppdG9iCmNvbmNhdApmcmFtZV9kaWcgMwppdG9iCmNvbmNhdApmcmFtZV9kaWcgNgpjb25jYXQKZnJhbWVfYnVyeSAxCmZyYW1lX2RpZyAtMwpleHRyYWN0IDIgMApib3hfZGVsCnBvcApmcmFtZV9kaWcgLTMKZXh0cmFjdCAyIDAKZnJhbWVfZGlnIDEKYm94X3B1dApyZXRzdWIKCi8vIHJlYWRfcHJvcG9zYWwKcmVhZHByb3Bvc2FsXzI6CnByb3RvIDEgMQpieXRlY18wIC8vICIiCmZyYW1lX2RpZyAtMQpleHRyYWN0IDIgMApib3hfZ2V0CnN0b3JlIDEKc3RvcmUgMApsb2FkIDEKYXNzZXJ0CmxvYWQgMApmcmFtZV9idXJ5IDAKcmV0c3ViCgovLyB2b3RlX3llcwp2b3RleWVzXzM6CnByb3RvIDEgMAppbnRjXzAgLy8gMApieXRlY18wIC8vICIiCmludGNfMCAvLyAwCmR1cApieXRlY18wIC8vICIiCmludGNfMCAvLyAwCmR1cG4gMwpieXRlY18wIC8vICIiCmR1cApmcmFtZV9kaWcgLTEKZXh0cmFjdCAyIDAKYm94X2dldApzdG9yZSAzCnN0b3JlIDIKbG9hZCAzCmFzc2VydApsb2FkIDIKZnJhbWVfYnVyeSAxCmZyYW1lX2RpZyAxCnB1c2hpbnQgMTMgLy8gMTMKZXh0cmFjdF91aW50NjQKZnJhbWVfYnVyeSAwCmZyYW1lX2RpZyAwCmludGNfMSAvLyAxCisKZnJhbWVfYnVyeSAyCmZyYW1lX2RpZyAxCnB1c2hpbnQgMjEgLy8gMjEKZXh0cmFjdF91aW50NjQKZnJhbWVfYnVyeSAzCmZyYW1lX2RpZyAxCmZyYW1lX2RpZyAxCnB1c2hpbnQgMiAvLyAyCmV4dHJhY3RfdWludDE2CmRpZyAxCmxlbgpzdWJzdHJpbmczCmZyYW1lX2J1cnkgNApmcmFtZV9kaWcgMQpwdXNoaW50IDMyIC8vIDMyCmdldGJpdApmcmFtZV9idXJ5IDUKZnJhbWVfZGlnIDEKcHVzaGludCA1IC8vIDUKZXh0cmFjdF91aW50NjQKZnJhbWVfYnVyeSA2CmZyYW1lX2RpZyAtMQpmcmFtZV9idXJ5IDEwCmZyYW1lX2RpZyAxMApmcmFtZV9idXJ5IDkKaW50Y18yIC8vIDI5CmZyYW1lX2J1cnkgNwpmcmFtZV9kaWcgNwpmcmFtZV9kaWcgMTAKbGVuCisKZnJhbWVfYnVyeSA4CmZyYW1lX2RpZyA4CmludGNfMyAvLyA2NTUzNgo8CmFzc2VydApmcmFtZV9kaWcgNwppdG9iCmV4dHJhY3QgNiAwCmZyYW1lX2RpZyA0CmZyYW1lX2J1cnkgMTAKZnJhbWVfZGlnIDkKZnJhbWVfZGlnIDEwCmNvbmNhdApmcmFtZV9idXJ5IDkKZnJhbWVfZGlnIDgKZnJhbWVfYnVyeSA3CmZyYW1lX2RpZyA3Cml0b2IKZXh0cmFjdCA2IDAKY29uY2F0CmJ5dGVjXzEgLy8gMHgwMAppbnRjXzAgLy8gMApmcmFtZV9kaWcgNQpzZXRiaXQKY29uY2F0CmZyYW1lX2RpZyA2Cml0b2IKY29uY2F0CmZyYW1lX2RpZyAyCml0b2IKY29uY2F0CmZyYW1lX2RpZyAzCml0b2IKY29uY2F0CmZyYW1lX2RpZyA5CmNvbmNhdApmcmFtZV9idXJ5IDEKZnJhbWVfZGlnIC0xCmV4dHJhY3QgMiAwCmJveF9kZWwKcG9wCmZyYW1lX2RpZyAtMQpleHRyYWN0IDIgMApmcmFtZV9kaWcgMQpib3hfcHV0CnJldHN1YgoKLy8gdm90ZV9ubwp2b3Rlbm9fNDoKcHJvdG8gMSAwCmludGNfMCAvLyAwCmJ5dGVjXzAgLy8gIiIKaW50Y18wIC8vIDAKZHVwCmJ5dGVjXzAgLy8gIiIKaW50Y18wIC8vIDAKZHVwbiAzCmJ5dGVjXzAgLy8gIiIKZHVwCmZyYW1lX2RpZyAtMQpleHRyYWN0IDIgMApib3hfZ2V0CnN0b3JlIDUKc3RvcmUgNApsb2FkIDUKYXNzZXJ0CmxvYWQgNApmcmFtZV9idXJ5IDEKZnJhbWVfZGlnIDEKcHVzaGludCAyMSAvLyAyMQpleHRyYWN0X3VpbnQ2NApmcmFtZV9idXJ5IDAKZnJhbWVfZGlnIDAKaW50Y18xIC8vIDEKKwpmcmFtZV9idXJ5IDIKZnJhbWVfZGlnIDEKcHVzaGludCAxMyAvLyAxMwpleHRyYWN0X3VpbnQ2NApmcmFtZV9idXJ5IDMKZnJhbWVfZGlnIDEKZnJhbWVfZGlnIDEKcHVzaGludCAyIC8vIDIKZXh0cmFjdF91aW50MTYKZGlnIDEKbGVuCnN1YnN0cmluZzMKZnJhbWVfYnVyeSA0CmZyYW1lX2RpZyAxCnB1c2hpbnQgMzIgLy8gMzIKZ2V0Yml0CmZyYW1lX2J1cnkgNQpmcmFtZV9kaWcgMQpwdXNoaW50IDUgLy8gNQpleHRyYWN0X3VpbnQ2NApmcmFtZV9idXJ5IDYKZnJhbWVfZGlnIC0xCmZyYW1lX2J1cnkgMTAKZnJhbWVfZGlnIDEwCmZyYW1lX2J1cnkgOQppbnRjXzIgLy8gMjkKZnJhbWVfYnVyeSA3CmZyYW1lX2RpZyA3CmZyYW1lX2RpZyAxMApsZW4KKwpmcmFtZV9idXJ5IDgKZnJhbWVfZGlnIDgKaW50Y18zIC8vIDY1NTM2CjwKYXNzZXJ0CmZyYW1lX2RpZyA3Cml0b2IKZXh0cmFjdCA2IDAKZnJhbWVfZGlnIDQKZnJhbWVfYnVyeSAxMApmcmFtZV9kaWcgOQpmcmFtZV9kaWcgMTAKY29uY2F0CmZyYW1lX2J1cnkgOQpmcmFtZV9kaWcgOApmcmFtZV9idXJ5IDcKZnJhbWVfZGlnIDcKaXRvYgpleHRyYWN0IDYgMApjb25jYXQKYnl0ZWNfMSAvLyAweDAwCmludGNfMCAvLyAwCmZyYW1lX2RpZyA1CnNldGJpdApjb25jYXQKZnJhbWVfZGlnIDYKaXRvYgpjb25jYXQKZnJhbWVfZGlnIDMKaXRvYgpjb25jYXQKZnJhbWVfZGlnIDIKaXRvYgpjb25jYXQKZnJhbWVfZGlnIDkKY29uY2F0CmZyYW1lX2J1cnkgMQpmcmFtZV9kaWcgLTEKZXh0cmFjdCAyIDAKYm94X2RlbApwb3AKZnJhbWVfZGlnIC0xCmV4dHJhY3QgMiAwCmZyYW1lX2RpZyAxCmJveF9wdXQKcmV0c3ViCgovLyBhZGRfcHJvcG9zYWxfY2FzdGVyCmFkZHByb3Bvc2FsY2FzdGVyXzU6CnByb3RvIDAgMApieXRlY18wIC8vICIiCmR1cAppbnRjXzAgLy8gMAp0eG5hIEFwcGxpY2F0aW9uQXJncyAxCmZyYW1lX2J1cnkgMAp0eG5hIEFwcGxpY2F0aW9uQXJncyAyCmZyYW1lX2J1cnkgMQp0eG5hIEFwcGxpY2F0aW9uQXJncyAzCmJ0b2kKZnJhbWVfYnVyeSAyCmZyYW1lX2RpZyAwCmZyYW1lX2RpZyAxCmZyYW1lX2RpZyAyCmNhbGxzdWIgYWRkcHJvcG9zYWxfMQpyZXRzdWIKCi8vIHJlYWRfcHJvcG9zYWxfY2FzdGVyCnJlYWRwcm9wb3NhbGNhc3Rlcl82Ogpwcm90byAwIDAKYnl0ZWNfMCAvLyAiIgpkdXAKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQpmcmFtZV9idXJ5IDEKZnJhbWVfZGlnIDEKY2FsbHN1YiByZWFkcHJvcG9zYWxfMgpmcmFtZV9idXJ5IDAKcHVzaGJ5dGVzIDB4MTUxZjdjNzUgLy8gMHgxNTFmN2M3NQpmcmFtZV9kaWcgMApjb25jYXQKbG9nCnJldHN1YgoKLy8gdm90ZV95ZXNfY2FzdGVyCnZvdGV5ZXNjYXN0ZXJfNzoKcHJvdG8gMCAwCmJ5dGVjXzAgLy8gIiIKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQpmcmFtZV9idXJ5IDAKZnJhbWVfZGlnIDAKY2FsbHN1YiB2b3RleWVzXzMKcmV0c3ViCgovLyB2b3RlX25vX2Nhc3Rlcgp2b3Rlbm9jYXN0ZXJfODoKcHJvdG8gMCAwCmJ5dGVjXzAgLy8gIiIKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQpmcmFtZV9idXJ5IDAKZnJhbWVfZGlnIDAKY2FsbHN1YiB2b3Rlbm9fNApyZXRzdWI=",
    "clear": "I3ByYWdtYSB2ZXJzaW9uIDgKcHVzaGludCAwIC8vIDAKcmV0dXJu"
  },
  "state": {
    "global": {
      "num_byte_slices": 1,
      "num_uints": 0
    },
    "local": {
      "num_byte_slices": 0,
      "num_uints": 0
    }
  },
  "schema": {
    "global": {
      "declared": {
        "membership_token": {
          "type": "bytes",
          "key": "membership_token",
          "descr": ""
        }
      },
      "reserved": {}
    },
    "local": {
      "declared": {},
      "reserved": {}
    }
  },
  "contract": {
    "name": "proposals",
    "methods": [
      {
        "name": "add_proposal",
        "args": [
          {
            "type": "string",
            "name": "name"
          },
          {
            "type": "string",
            "name": "description"
          },
          {
            "type": "uint64",
            "name": "end_time"
          }
        ],
        "returns": {
          "type": "void"
        }
      },
      {
        "name": "read_proposal",
        "args": [
          {
            "type": "string",
            "name": "name"
          }
        ],
        "returns": {
          "type": "(string,string,bool,uint64,uint64,uint64)"
        }
      },
      {
        "name": "vote_yes",
        "args": [
          {
            "type": "string",
            "name": "proposal_name"
          }
        ],
        "returns": {
          "type": "void"
        }
      },
      {
        "name": "vote_no",
        "args": [
          {
            "type": "string",
            "name": "proposal_name"
          }
        ],
        "returns": {
          "type": "void"
        }
      }
    ],
    "networks": {}
  },
  "bare_call_config": {
    "no_op": "CREATE"
  }
}

/**
 * Defines an onCompletionAction of 'no_op'
 */
export type OnCompleteNoOp =  { onCompleteAction?: 'no_op' | OnApplicationComplete.NoOpOC }
/**
 * Defines an onCompletionAction of 'opt_in'
 */
export type OnCompleteOptIn =  { onCompleteAction: 'opt_in' | OnApplicationComplete.OptInOC }
/**
 * Defines an onCompletionAction of 'close_out'
 */
export type OnCompleteCloseOut =  { onCompleteAction: 'close_out' | OnApplicationComplete.CloseOutOC }
/**
 * Defines an onCompletionAction of 'delete_application'
 */
export type OnCompleteDelApp =  { onCompleteAction: 'delete_application' | OnApplicationComplete.DeleteApplicationOC }
/**
 * Defines an onCompletionAction of 'update_application'
 */
export type OnCompleteUpdApp =  { onCompleteAction: 'update_application' | OnApplicationComplete.UpdateApplicationOC }
/**
 * A state record containing a single unsigned integer
 */
export type IntegerState = {
  /**
   * Gets the state value as a BigInt 
   */
  asBigInt(): bigint
  /**
   * Gets the state value as a number.
   */
  asNumber(): number
}
/**
 * A state record containing binary data
 */
export type BinaryState = {
  /**
   * Gets the state value as a Uint8Array
   */
  asByteArray(): Uint8Array
  /**
   * Gets the state value as a string
   */
  asString(): string
}

export type AppCreateCallTransactionResult = AppCallTransactionResult & Partial<AppCompilationResult> & AppReference
export type AppUpdateCallTransactionResult = AppCallTransactionResult & Partial<AppCompilationResult>

/**
 * Defines the types of available calls and state of the Proposals smart contract.
 */
export type Proposals = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'add_proposal(string,string,uint64)void' | 'add_proposal', {
      argsObj: {
        name: string
        description: string
        end_time: bigint | number
      }
      argsTuple: [name: string, description: string, end_time: bigint | number]
      returns: void
    }>
    & Record<'read_proposal(string)(string,string,bool,uint64,uint64,uint64)' | 'read_proposal', {
      argsObj: {
        name: string
      }
      argsTuple: [name: string]
      returns: Proposal
    }>
    & Record<'vote_yes(string)void' | 'vote_yes', {
      argsObj: {
        proposal_name: string
      }
      argsTuple: [proposal_name: string]
      returns: void
    }>
    & Record<'vote_no(string)void' | 'vote_no', {
      argsObj: {
        proposal_name: string
      }
      argsTuple: [proposal_name: string]
      returns: void
    }>
  /**
   * Defines the shape of the global and local state of the application.
   */
  state: {
    global: {
      'membership_token'?: BinaryState
    }
  }
}
/**
 * Defines the possible abi call signatures
 */
export type ProposalsSig = keyof Proposals['methods']
/**
 * Defines an object containing all relevant parameters for a single call to the contract. Where TSignature is undefined, a bare call is made
 */
export type TypedCallParams<TSignature extends ProposalsSig | undefined> = {
  method: TSignature
  methodArgs: TSignature extends undefined ? undefined : Array<ABIAppCallArg | undefined>
} & AppClientCallCoreParams & CoreAppCallArgs
/**
 * Defines the arguments required for a bare call
 */
export type BareCallArgs = Omit<RawAppCallArgs, keyof CoreAppCallArgs>
/**
 * Represents a Proposal result as a struct
 */
export type Proposal = {
  name: string
  description: string
  is_open: boolean
  end_time: bigint
  yes_count: bigint
  no_count: bigint
}
/**
 * Converts the tuple representation of a Proposal to the struct representation
 */
export function Proposal([name, description, is_open, end_time, yes_count, no_count]: [string, string, boolean, bigint, bigint, bigint] ) {
  return {
    name,
    description,
    is_open,
    end_time,
    yes_count,
    no_count,
  }
}
/**
 * Maps a method signature from the Proposals smart contract to the method's arguments in either tuple of struct form
 */
export type MethodArgs<TSignature extends ProposalsSig> = Proposals['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the Proposals smart contract to the method's return type
 */
export type MethodReturn<TSignature extends ProposalsSig> = Proposals['methods'][TSignature]['returns']

/**
 * A factory for available 'create' calls
 */
export type ProposalsCreateCalls = (typeof ProposalsCallFactory)['create']
/**
 * Defines supported create methods for this smart contract
 */
export type ProposalsCreateCallParams =
  | (TypedCallParams<undefined> & (OnCompleteNoOp))
/**
 * Defines arguments required for the deploy method.
 */
export type ProposalsDeployArgs = {
  deployTimeParams?: TealTemplateParams
  /**
   * A delegate which takes a create call factory and returns the create call params for this smart contract
   */
  createCall?: (callFactory: ProposalsCreateCalls) => ProposalsCreateCallParams
}


/**
 * Exposes methods for constructing all available smart contract calls
 */
export abstract class ProposalsCallFactory {
  /**
   * Gets available create call factories
   */
  static get create() {
    return {
      /**
       * Constructs a create call for the proposals smart contract using a bare call
       *
       * @param params Any parameters for the call
       * @returns A TypedCallParams object for the call
       */
      bare(params: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs & AppClientCompilationParams & (OnCompleteNoOp) = {}) {
        return {
          method: undefined,
          methodArgs: undefined,
          ...params,
        }
      },
    }
  }

  /**
   * Constructs a no op call for the add_proposal(string,string,uint64)void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static addProposal(args: MethodArgs<'add_proposal(string,string,uint64)void'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'add_proposal(string,string,uint64)void' as const,
      methodArgs: Array.isArray(args) ? args : [args.name, args.description, args.end_time],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the read_proposal(string)(string,string,bool,uint64,uint64,uint64) ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static readProposal(args: MethodArgs<'read_proposal(string)(string,string,bool,uint64,uint64,uint64)'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'read_proposal(string)(string,string,bool,uint64,uint64,uint64)' as const,
      methodArgs: Array.isArray(args) ? args : [args.name],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the vote_yes(string)void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static voteYes(args: MethodArgs<'vote_yes(string)void'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'vote_yes(string)void' as const,
      methodArgs: Array.isArray(args) ? args : [args.proposal_name],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the vote_no(string)void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static voteNo(args: MethodArgs<'vote_no(string)void'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'vote_no(string)void' as const,
      methodArgs: Array.isArray(args) ? args : [args.proposal_name],
      ...params,
    }
  }
}

/**
 * A client to make calls to the proposals smart contract
 */
export class ProposalsClient {
  /**
   * The underlying `ApplicationClient` for when you want to have more flexibility
   */
  public readonly appClient: ApplicationClient

  private readonly sender: SendTransactionFrom | undefined

  /**
   * Creates a new instance of `ProposalsClient`
   *
   * @param appDetails appDetails The details to identify the app to deploy
   * @param algod An algod client instance
   */
  constructor(appDetails: AppDetails, private algod: Algodv2) {
    this.sender = appDetails.sender
    this.appClient = algokit.getAppClient({
      ...appDetails,
      app: APP_SPEC
    }, algod)
  }

  /**
   * Checks for decode errors on the AppCallTransactionResult and maps the return value to the specified generic type
   *
   * @param result The AppCallTransactionResult to be mapped
   * @param returnValueFormatter An optional delegate to format the return value if required
   * @returns The smart contract response with an updated return value
   */
  protected mapReturnValue<TReturn, TResult extends AppCallTransactionResult = AppCallTransactionResult>(result: AppCallTransactionResult, returnValueFormatter?: (value: any) => TReturn): AppCallTransactionResultOfType<TReturn> & TResult {
    if(result.return?.decodeError) {
      throw result.return.decodeError
    }
    const returnValue = result.return?.returnValue !== undefined && returnValueFormatter !== undefined
      ? returnValueFormatter(result.return.returnValue)
      : result.return?.returnValue as TReturn | undefined
      return { ...result, return: returnValue } as AppCallTransactionResultOfType<TReturn> & TResult
  }

  /**
   * Calls the ABI method with the matching signature using an onCompletion code of NO_OP
   *
   * @param typedCallParams An object containing the method signature, args, and any other relevant parameters
   * @param returnValueFormatter An optional delegate which when provided will be used to map non-undefined return values to the target type
   * @returns The result of the smart contract call
   */
  public async call<TSignature extends keyof Proposals['methods']>(typedCallParams: TypedCallParams<TSignature>, returnValueFormatter?: (value: any) => MethodReturn<TSignature>) {
    return this.mapReturnValue<MethodReturn<TSignature>>(await this.appClient.call(typedCallParams), returnValueFormatter)
  }

  /**
   * Idempotently deploys the proposals smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public deploy(params: ProposalsDeployArgs & AppClientDeployCoreParams = {}): ReturnType<ApplicationClient['deploy']> {
    const createArgs = params.createCall?.(ProposalsCallFactory.create)
    return this.appClient.deploy({
      ...params,
      createArgs,
      createOnCompleteAction: createArgs?.onCompleteAction,
    })
  }

  /**
   * Gets available create methods
   */
  public get create() {
    const $this = this
    return {
      /**
       * Creates a new instance of the proposals smart contract using a bare call.
       *
       * @param args The arguments for the bare call
       * @returns The create result
       */
      async bare(args: BareCallArgs & AppClientCallCoreParams & AppClientCompilationParams & CoreAppCallArgs & (OnCompleteNoOp) = {}) {
        return $this.mapReturnValue<undefined, AppCreateCallTransactionResult>(await $this.appClient.create(args))
      },
    }
  }

  /**
   * Makes a clear_state call to an existing instance of the proposals smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The clear_state result
   */
  public clearState(args: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.appClient.clearState(args)
  }

  /**
   * Calls the add_proposal(string,string,uint64)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public addProposal(args: MethodArgs<'add_proposal(string,string,uint64)void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(ProposalsCallFactory.addProposal(args, params))
  }

  /**
   * Calls the read_proposal(string)(string,string,bool,uint64,uint64,uint64) ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public readProposal(args: MethodArgs<'read_proposal(string)(string,string,bool,uint64,uint64,uint64)'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(ProposalsCallFactory.readProposal(args, params), Proposal)
  }

  /**
   * Calls the vote_yes(string)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public voteYes(args: MethodArgs<'vote_yes(string)void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(ProposalsCallFactory.voteYes(args, params))
  }

  /**
   * Calls the vote_no(string)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public voteNo(args: MethodArgs<'vote_no(string)void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(ProposalsCallFactory.voteNo(args, params))
  }

  /**
   * Extracts a binary state value out of an AppState dictionary
   *
   * @param state The state dictionary containing the state value
   * @param key The key of the state value
   * @returns A BinaryState instance containing the state value, or undefined if the key was not found
   */
  private static getBinaryState(state: AppState, key: string): BinaryState | undefined {
    const value = state[key]
    if (!value) return undefined
    if (!('valueRaw' in value))
      throw new Error(`Failed to parse state value for ${key}; received an int when expected a byte array`)
    return {
      asString(): string {
        return value.value
      },
      asByteArray(): Uint8Array {
        return value.valueRaw
      }
    }
  }

  /**
   * Extracts a integer state value out of an AppState dictionary
   *
   * @param state The state dictionary containing the state value
   * @param key The key of the state value
   * @returns An IntegerState instance containing the state value, or undefined if the key was not found
   */
  private static getIntegerState(state: AppState, key: string): IntegerState | undefined {
    const value = state[key]
    if (!value) return undefined
    if ('valueRaw' in value)
      throw new Error(`Failed to parse state value for ${key}; received a byte array when expected a number`)
    return {
      asBigInt() {
        return typeof value.value === 'bigint' ? value.value : BigInt(value.value)
      },
      asNumber(): number {
        return typeof value.value === 'bigint' ? Number(value.value) : value.value
      },
    }
  }

  /**
   * Returns the smart contract's global state wrapped in a strongly typed accessor with options to format the stored value
   */
  public async getGlobalState(): Promise<Proposals['state']['global']> {
    const state = await this.appClient.getGlobalState()
    return {
      get membership_token() {
        return ProposalsClient.getBinaryState(state, 'membership_token')
      },
    }
  }

  public compose(): ProposalsComposer {
    const client = this
    const atc = new AtomicTransactionComposer()
    let promiseChain:Promise<unknown> = Promise.resolve()
    const resultMappers: Array<undefined | ((x: any) => any)> = []
    return {
      addProposal(args: MethodArgs<'add_proposal(string,string,uint64)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.addProposal(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      readProposal(args: MethodArgs<'read_proposal(string)(string,string,bool,uint64,uint64,uint64)'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.readProposal(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(Proposal)
        return this
      },
      voteYes(args: MethodArgs<'vote_yes(string)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.voteYes(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      voteNo(args: MethodArgs<'vote_no(string)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.voteNo(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.clearState({...args, sendParams: {...args?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom) {
        promiseChain = promiseChain.then(async () => atc.addTransaction(await algokit.getTransactionWithSigner(txn, defaultSender ?? client.sender)))
        return this
      },
      async atc() {
        await promiseChain
        return atc
      },
      async simulate(options?: SimulateOptions) {
        await promiseChain
        const result = await atc.simulate(client.algod, new modelsv2.SimulateRequest({ txnGroups: [], ...options }))
        return {
          ...result,
          returns: result.methodResults?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      },
      async execute() {
        await promiseChain
        const result = await algokit.sendAtomicTransactionComposer({ atc, sendParams: {} }, client.algod)
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      }
    } as unknown as ProposalsComposer
  }
}
export type ProposalsComposer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the add_proposal(string,string,uint64)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  addProposal(args: MethodArgs<'add_proposal(string,string,uint64)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs): ProposalsComposer<[...TReturns, MethodReturn<'add_proposal(string,string,uint64)void'>]>

  /**
   * Calls the read_proposal(string)(string,string,bool,uint64,uint64,uint64) ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  readProposal(args: MethodArgs<'read_proposal(string)(string,string,bool,uint64,uint64,uint64)'>, params?: AppClientCallCoreParams & CoreAppCallArgs): ProposalsComposer<[...TReturns, MethodReturn<'read_proposal(string)(string,string,bool,uint64,uint64,uint64)'>]>

  /**
   * Calls the vote_yes(string)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  voteYes(args: MethodArgs<'vote_yes(string)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs): ProposalsComposer<[...TReturns, MethodReturn<'vote_yes(string)void'>]>

  /**
   * Calls the vote_no(string)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  voteNo(args: MethodArgs<'vote_no(string)void'>, params?: AppClientCallCoreParams & CoreAppCallArgs): ProposalsComposer<[...TReturns, MethodReturn<'vote_no(string)void'>]>

  /**
   * Makes a clear_state call to an existing instance of the proposals smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(args?: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs): ProposalsComposer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils helpers (signer is obtained from the defaultSender parameter)
   * @param defaultSender The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.
   */
  addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom): ProposalsComposer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  atc(): Promise<AtomicTransactionComposer>
  /**
   * Simulates the transaction group and returns the result
   */
  simulate(options?: SimulateOptions): Promise<ProposalsComposerSimulateResult<TReturns>>
  /**
   * Executes the transaction group and returns the results
   */
  execute(): Promise<ProposalsComposerResults<TReturns>>
}
export type SimulateOptions = Omit<ConstructorParameters<typeof modelsv2.SimulateRequest>[0], 'txnGroups'>
export type ProposalsComposerSimulateResult<TReturns extends [...any[]]> = {
  returns: TReturns
  methodResults: ABIResult[]
  simulateResponse: modelsv2.SimulateResponse
}
export type ProposalsComposerResults<TReturns extends [...any[]]> = {
  returns: TReturns
  groupId: string
  txIds: string[]
  transactions: Transaction[]
}
