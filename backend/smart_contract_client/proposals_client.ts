import algosdk from "algosdk";
import * as bkr from "beaker-ts";
export class Proposal {
    name: string = "";
    description: string = "";
    is_open: boolean = false;
    end_time: bigint = BigInt(0);
    yes_count: bigint = BigInt(0);
    no_count: bigint = BigInt(0);
    static codec: algosdk.ABIType = algosdk.ABIType.from("(string,string,bool,uint64,uint64,uint64)");
    static fields: string[] = ["name", "description", "is_open", "end_time", "yes_count", "no_count"];
    static decodeResult(val: algosdk.ABIValue | undefined): Proposal {
        return bkr.decodeNamedTuple(val, Proposal.fields) as Proposal;
    }
    static decodeBytes(val: Uint8Array): Proposal {
        return bkr.decodeNamedTuple(Proposal.codec.decode(val), Proposal.fields) as Proposal;
    }
}
export class proposals extends bkr.ApplicationClient {
    desc: string = "";
    override appSchema: bkr.Schema = { declared: {}, reserved: {} };
    override acctSchema: bkr.Schema = { declared: {}, reserved: {} };
    override approvalProgram: string = "I3ByYWdtYSB2ZXJzaW9uIDgKaW50Y2Jsb2NrIDAgMSA1OTEwOTkzNTUgMjkgNjU1MzYKYnl0ZWNibG9jayAweCAweDAwIDB4MTUxZjdjNzUKdHhuIE51bUFwcEFyZ3MKaW50Y18wIC8vIDAKPT0KYm56IG1haW5fbDE0CnR4bmEgQXBwbGljYXRpb25BcmdzIDAKcHVzaGJ5dGVzIDB4ZmU2Y2FjYzMgLy8gImFkZF9wcm9wb3NhbChzdHJpbmcsc3RyaW5nLHVpbnQ2NCxhc3NldCl2b2lkIgo9PQpibnogbWFpbl9sMTMKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMApwdXNoYnl0ZXMgMHhkNzc4YWQyNSAvLyAicmVhZF9wcm9wb3NhbChzdHJpbmcpKHN0cmluZyxzdHJpbmcsYm9vbCx1aW50NjQsdWludDY0LHVpbnQ2NCkiCj09CmJueiBtYWluX2wxMgp0eG5hIEFwcGxpY2F0aW9uQXJncyAwCnB1c2hieXRlcyAweDQ0ZDA3Mzk1IC8vICJ2b3RlX3llcyhzdHJpbmcpdm9pZCIKPT0KYm56IG1haW5fbDExCnR4bmEgQXBwbGljYXRpb25BcmdzIDAKcHVzaGJ5dGVzIDB4MGUxODcwMzQgLy8gInZvdGVfbm8oc3RyaW5nKXZvaWQiCj09CmJueiBtYWluX2wxMAp0eG5hIEFwcGxpY2F0aW9uQXJncyAwCnB1c2hieXRlcyAweDg5Y2I4YTlhIC8vICJkZWxldGVfcHJvcG9zYWwoc3RyaW5nKXZvaWQiCj09CmJueiBtYWluX2w5CnR4bmEgQXBwbGljYXRpb25BcmdzIDAKcHVzaGJ5dGVzIDB4MDdmOTU5OGQgLy8gImdlbmVyYXRlX21lbWJlcnNoaXBfdG9rZW4ocGF5LHN0cmluZyl1aW50NjQiCj09CmJueiBtYWluX2w4CmVycgptYWluX2w4Ogp0eG4gT25Db21wbGV0aW9uCmludGNfMCAvLyBOb09wCj09CnR4biBBcHBsaWNhdGlvbklECmludGNfMCAvLyAwCiE9CiYmCmFzc2VydApjYWxsc3ViIGdlbmVyYXRlbWVtYmVyc2hpcHRva2VuY2FzdGVyXzEyCmludGNfMSAvLyAxCnJldHVybgptYWluX2w5Ogp0eG4gT25Db21wbGV0aW9uCmludGNfMCAvLyBOb09wCj09CnR4biBBcHBsaWNhdGlvbklECmludGNfMCAvLyAwCiE9CiYmCmFzc2VydApjYWxsc3ViIGRlbGV0ZXByb3Bvc2FsY2FzdGVyXzExCmludGNfMSAvLyAxCnJldHVybgptYWluX2wxMDoKdHhuIE9uQ29tcGxldGlvbgppbnRjXzAgLy8gTm9PcAo9PQp0eG4gQXBwbGljYXRpb25JRAppbnRjXzAgLy8gMAohPQomJgphc3NlcnQKY2FsbHN1YiB2b3Rlbm9jYXN0ZXJfMTAKaW50Y18xIC8vIDEKcmV0dXJuCm1haW5fbDExOgp0eG4gT25Db21wbGV0aW9uCmludGNfMCAvLyBOb09wCj09CnR4biBBcHBsaWNhdGlvbklECmludGNfMCAvLyAwCiE9CiYmCmFzc2VydApjYWxsc3ViIHZvdGV5ZXNjYXN0ZXJfOQppbnRjXzEgLy8gMQpyZXR1cm4KbWFpbl9sMTI6CnR4biBPbkNvbXBsZXRpb24KaW50Y18wIC8vIE5vT3AKPT0KdHhuIEFwcGxpY2F0aW9uSUQKaW50Y18wIC8vIDAKIT0KJiYKYXNzZXJ0CmNhbGxzdWIgcmVhZHByb3Bvc2FsY2FzdGVyXzgKaW50Y18xIC8vIDEKcmV0dXJuCm1haW5fbDEzOgp0eG4gT25Db21wbGV0aW9uCmludGNfMCAvLyBOb09wCj09CnR4biBBcHBsaWNhdGlvbklECmludGNfMCAvLyAwCiE9CiYmCmFzc2VydApjYWxsc3ViIGFkZHByb3Bvc2FsY2FzdGVyXzcKaW50Y18xIC8vIDEKcmV0dXJuCm1haW5fbDE0Ogp0eG4gT25Db21wbGV0aW9uCmludGNfMCAvLyBOb09wCj09CmJueiBtYWluX2wxNgplcnIKbWFpbl9sMTY6CnR4biBBcHBsaWNhdGlvbklECmludGNfMCAvLyAwCj09CmFzc2VydApjYWxsc3ViIGNyZWF0ZV8wCmludGNfMSAvLyAxCnJldHVybgoKLy8gY3JlYXRlCmNyZWF0ZV8wOgpwcm90byAwIDAKcmV0c3ViCgovLyBhZGRfcHJvcG9zYWwKYWRkcHJvcG9zYWxfMToKcHJvdG8gNCAwCmludGNfMCAvLyAwCmJ5dGVjXzAgLy8gIiIKaW50Y18wIC8vIDAKZHVwbiAzCmJ5dGVjXzAgLy8gIiIKZHVwCnR4biBTZW5kZXIKaW50Y18yIC8vIDU5MTA5OTM1NQphc3NldF9ob2xkaW5nX2dldCBBc3NldEJhbGFuY2UKc3RvcmUgMQpzdG9yZSAwCmxvYWQgMQpsb2FkIDAKaW50Y18wIC8vIDAKPgomJgovLyB1bmF1dGhvcml6ZWQKYXNzZXJ0CmludGNfMSAvLyAxCiEKIQpmcmFtZV9idXJ5IDAKaW50Y18wIC8vIDAKZnJhbWVfYnVyeSAyCmludGNfMCAvLyAwCmZyYW1lX2J1cnkgMwpmcmFtZV9kaWcgLTQKZnJhbWVfYnVyeSA3CmZyYW1lX2RpZyA3CmZyYW1lX2J1cnkgNgppbnRjXzMgLy8gMjkKZnJhbWVfYnVyeSA0CmZyYW1lX2RpZyA0CmZyYW1lX2RpZyA3CmxlbgorCmZyYW1lX2J1cnkgNQpmcmFtZV9kaWcgNQppbnRjIDQgLy8gNjU1MzYKPAphc3NlcnQKZnJhbWVfZGlnIDQKaXRvYgpleHRyYWN0IDYgMApmcmFtZV9kaWcgLTMKZnJhbWVfYnVyeSA3CmZyYW1lX2RpZyA2CmZyYW1lX2RpZyA3CmNvbmNhdApmcmFtZV9idXJ5IDYKZnJhbWVfZGlnIDUKZnJhbWVfYnVyeSA0CmZyYW1lX2RpZyA0Cml0b2IKZXh0cmFjdCA2IDAKY29uY2F0CmJ5dGVjXzEgLy8gMHgwMAppbnRjXzAgLy8gMApmcmFtZV9kaWcgMApzZXRiaXQKY29uY2F0CmZyYW1lX2RpZyAtMgppdG9iCmNvbmNhdApmcmFtZV9kaWcgMgppdG9iCmNvbmNhdApmcmFtZV9kaWcgMwppdG9iCmNvbmNhdApmcmFtZV9kaWcgNgpjb25jYXQKZnJhbWVfYnVyeSAxCmZyYW1lX2RpZyAtNApleHRyYWN0IDIgMApib3hfZGVsCnBvcApmcmFtZV9kaWcgLTQKZXh0cmFjdCAyIDAKZnJhbWVfZGlnIDEKYm94X3B1dApyZXRzdWIKCi8vIHJlYWRfcHJvcG9zYWwKcmVhZHByb3Bvc2FsXzI6CnByb3RvIDEgMQpieXRlY18wIC8vICIiCmZyYW1lX2RpZyAtMQpleHRyYWN0IDIgMApib3hfZ2V0CnN0b3JlIDMKc3RvcmUgMgpsb2FkIDMKYXNzZXJ0CmxvYWQgMgpmcmFtZV9idXJ5IDAKcmV0c3ViCgovLyB2b3RlX3llcwp2b3RleWVzXzM6CnByb3RvIDEgMAppbnRjXzAgLy8gMApieXRlY18wIC8vICIiCmludGNfMCAvLyAwCmR1cApieXRlY18wIC8vICIiCmludGNfMCAvLyAwCmR1cG4gMwpieXRlY18wIC8vICIiCmR1cAp0eG4gU2VuZGVyCmludGNfMiAvLyA1OTEwOTkzNTUKYXNzZXRfaG9sZGluZ19nZXQgQXNzZXRCYWxhbmNlCnN0b3JlIDUKc3RvcmUgNApsb2FkIDUKbG9hZCA0CmludGNfMCAvLyAwCj4KJiYKLy8gdW5hdXRob3JpemVkCmFzc2VydApmcmFtZV9kaWcgLTEKZXh0cmFjdCAyIDAKYm94X2dldApzdG9yZSA3CnN0b3JlIDYKbG9hZCA3CmFzc2VydApsb2FkIDYKZnJhbWVfYnVyeSAxCmZyYW1lX2RpZyAxCnB1c2hpbnQgMTMgLy8gMTMKZXh0cmFjdF91aW50NjQKZnJhbWVfYnVyeSAwCmZyYW1lX2RpZyAwCmludGNfMSAvLyAxCisKZnJhbWVfYnVyeSAyCmZyYW1lX2RpZyAxCnB1c2hpbnQgMjEgLy8gMjEKZXh0cmFjdF91aW50NjQKZnJhbWVfYnVyeSAzCmZyYW1lX2RpZyAxCmZyYW1lX2RpZyAxCnB1c2hpbnQgMiAvLyAyCmV4dHJhY3RfdWludDE2CmRpZyAxCmxlbgpzdWJzdHJpbmczCmZyYW1lX2J1cnkgNApmcmFtZV9kaWcgMQpwdXNoaW50IDMyIC8vIDMyCmdldGJpdApmcmFtZV9idXJ5IDUKZnJhbWVfZGlnIDEKcHVzaGludCA1IC8vIDUKZXh0cmFjdF91aW50NjQKZnJhbWVfYnVyeSA2CmZyYW1lX2RpZyAtMQpmcmFtZV9idXJ5IDEwCmZyYW1lX2RpZyAxMApmcmFtZV9idXJ5IDkKaW50Y18zIC8vIDI5CmZyYW1lX2J1cnkgNwpmcmFtZV9kaWcgNwpmcmFtZV9kaWcgMTAKbGVuCisKZnJhbWVfYnVyeSA4CmZyYW1lX2RpZyA4CmludGMgNCAvLyA2NTUzNgo8CmFzc2VydApmcmFtZV9kaWcgNwppdG9iCmV4dHJhY3QgNiAwCmZyYW1lX2RpZyA0CmZyYW1lX2J1cnkgMTAKZnJhbWVfZGlnIDkKZnJhbWVfZGlnIDEwCmNvbmNhdApmcmFtZV9idXJ5IDkKZnJhbWVfZGlnIDgKZnJhbWVfYnVyeSA3CmZyYW1lX2RpZyA3Cml0b2IKZXh0cmFjdCA2IDAKY29uY2F0CmJ5dGVjXzEgLy8gMHgwMAppbnRjXzAgLy8gMApmcmFtZV9kaWcgNQpzZXRiaXQKY29uY2F0CmZyYW1lX2RpZyA2Cml0b2IKY29uY2F0CmZyYW1lX2RpZyAyCml0b2IKY29uY2F0CmZyYW1lX2RpZyAzCml0b2IKY29uY2F0CmZyYW1lX2RpZyA5CmNvbmNhdApmcmFtZV9idXJ5IDEKZnJhbWVfZGlnIC0xCmV4dHJhY3QgMiAwCmJveF9kZWwKcG9wCmZyYW1lX2RpZyAtMQpleHRyYWN0IDIgMApmcmFtZV9kaWcgMQpib3hfcHV0CnJldHN1YgoKLy8gdm90ZV9ubwp2b3Rlbm9fNDoKcHJvdG8gMSAwCmludGNfMCAvLyAwCmJ5dGVjXzAgLy8gIiIKaW50Y18wIC8vIDAKZHVwCmJ5dGVjXzAgLy8gIiIKaW50Y18wIC8vIDAKZHVwbiAzCmJ5dGVjXzAgLy8gIiIKZHVwCnR4biBTZW5kZXIKaW50Y18yIC8vIDU5MTA5OTM1NQphc3NldF9ob2xkaW5nX2dldCBBc3NldEJhbGFuY2UKc3RvcmUgOQpzdG9yZSA4CmxvYWQgOQpsb2FkIDgKaW50Y18wIC8vIDAKPgomJgovLyB1bmF1dGhvcml6ZWQKYXNzZXJ0CmZyYW1lX2RpZyAtMQpleHRyYWN0IDIgMApib3hfZ2V0CnN0b3JlIDExCnN0b3JlIDEwCmxvYWQgMTEKYXNzZXJ0CmxvYWQgMTAKZnJhbWVfYnVyeSAxCmZyYW1lX2RpZyAxCnB1c2hpbnQgMjEgLy8gMjEKZXh0cmFjdF91aW50NjQKZnJhbWVfYnVyeSAwCmZyYW1lX2RpZyAwCmludGNfMSAvLyAxCisKZnJhbWVfYnVyeSAyCmZyYW1lX2RpZyAxCnB1c2hpbnQgMTMgLy8gMTMKZXh0cmFjdF91aW50NjQKZnJhbWVfYnVyeSAzCmZyYW1lX2RpZyAxCmZyYW1lX2RpZyAxCnB1c2hpbnQgMiAvLyAyCmV4dHJhY3RfdWludDE2CmRpZyAxCmxlbgpzdWJzdHJpbmczCmZyYW1lX2J1cnkgNApmcmFtZV9kaWcgMQpwdXNoaW50IDMyIC8vIDMyCmdldGJpdApmcmFtZV9idXJ5IDUKZnJhbWVfZGlnIDEKcHVzaGludCA1IC8vIDUKZXh0cmFjdF91aW50NjQKZnJhbWVfYnVyeSA2CmZyYW1lX2RpZyAtMQpmcmFtZV9idXJ5IDEwCmZyYW1lX2RpZyAxMApmcmFtZV9idXJ5IDkKaW50Y18zIC8vIDI5CmZyYW1lX2J1cnkgNwpmcmFtZV9kaWcgNwpmcmFtZV9kaWcgMTAKbGVuCisKZnJhbWVfYnVyeSA4CmZyYW1lX2RpZyA4CmludGMgNCAvLyA2NTUzNgo8CmFzc2VydApmcmFtZV9kaWcgNwppdG9iCmV4dHJhY3QgNiAwCmZyYW1lX2RpZyA0CmZyYW1lX2J1cnkgMTAKZnJhbWVfZGlnIDkKZnJhbWVfZGlnIDEwCmNvbmNhdApmcmFtZV9idXJ5IDkKZnJhbWVfZGlnIDgKZnJhbWVfYnVyeSA3CmZyYW1lX2RpZyA3Cml0b2IKZXh0cmFjdCA2IDAKY29uY2F0CmJ5dGVjXzEgLy8gMHgwMAppbnRjXzAgLy8gMApmcmFtZV9kaWcgNQpzZXRiaXQKY29uY2F0CmZyYW1lX2RpZyA2Cml0b2IKY29uY2F0CmZyYW1lX2RpZyAzCml0b2IKY29uY2F0CmZyYW1lX2RpZyAyCml0b2IKY29uY2F0CmZyYW1lX2RpZyA5CmNvbmNhdApmcmFtZV9idXJ5IDEKZnJhbWVfZGlnIC0xCmV4dHJhY3QgMiAwCmJveF9kZWwKcG9wCmZyYW1lX2RpZyAtMQpleHRyYWN0IDIgMApmcmFtZV9kaWcgMQpib3hfcHV0CnJldHN1YgoKLy8gZGVsZXRlX3Byb3Bvc2FsCmRlbGV0ZXByb3Bvc2FsXzU6CnByb3RvIDEgMAp0eG4gU2VuZGVyCmludGNfMiAvLyA1OTEwOTkzNTUKYXNzZXRfaG9sZGluZ19nZXQgQXNzZXRCYWxhbmNlCnN0b3JlIDEzCnN0b3JlIDEyCmxvYWQgMTMKbG9hZCAxMgppbnRjXzAgLy8gMAo+CiYmCi8vIHVuYXV0aG9yaXplZAphc3NlcnQKZnJhbWVfZGlnIC0xCmV4dHJhY3QgMiAwCmJveF9kZWwKcG9wCnJldHN1YgoKLy8gZ2VuZXJhdGVfbWVtYmVyc2hpcF90b2tlbgpnZW5lcmF0ZW1lbWJlcnNoaXB0b2tlbl82Ogpwcm90byAyIDEKaW50Y18wIC8vIDAKdHhuIFNlbmRlcgpnbG9iYWwgQ3JlYXRvckFkZHJlc3MKPT0KLy8gdW5hdXRob3JpemVkCmFzc2VydApmcmFtZV9kaWcgLTIKZ3R4bnMgUmVjZWl2ZXIKZ2xvYmFsIEN1cnJlbnRBcHBsaWNhdGlvbkFkZHJlc3MKPT0KLy8gcGF5bWVudCBtdXN0IGJlIHRvIGFwcCBhZGRyZXNzCmFzc2VydApmcmFtZV9kaWcgLTIKZ3R4bnMgQW1vdW50CnB1c2hpbnQgMzA3MDAwMDAgLy8gMzA3MDAwMDAKPj0KLy8gcGF5bWVudCBtdXN0IGJlIGZvciA+PSAzMDcwMDAwMAphc3NlcnQKaXR4bl9iZWdpbgpwdXNoaW50IDMgLy8gYWNmZwppdHhuX2ZpZWxkIFR5cGVFbnVtCmZyYW1lX2RpZyAtMQpleHRyYWN0IDIgMAppdHhuX2ZpZWxkIENvbmZpZ0Fzc2V0TmFtZQpwdXNoaW50IDIwMDAgLy8gMjAwMAppdHhuX2ZpZWxkIENvbmZpZ0Fzc2V0VG90YWwKaW50Y18xIC8vIDEKaXR4bl9maWVsZCBDb25maWdBc3NldERlZmF1bHRGcm96ZW4KZ2xvYmFsIEN1cnJlbnRBcHBsaWNhdGlvbkFkZHJlc3MKaXR4bl9maWVsZCBDb25maWdBc3NldE1hbmFnZXIKZ2xvYmFsIEN1cnJlbnRBcHBsaWNhdGlvbkFkZHJlc3MKaXR4bl9maWVsZCBDb25maWdBc3NldENsYXdiYWNrCmdsb2JhbCBDdXJyZW50QXBwbGljYXRpb25BZGRyZXNzCml0eG5fZmllbGQgQ29uZmlnQXNzZXRGcmVlemUKZ2xvYmFsIEN1cnJlbnRBcHBsaWNhdGlvbkFkZHJlc3MKaXR4bl9maWVsZCBDb25maWdBc3NldFJlc2VydmUKaW50Y18wIC8vIDAKaXR4bl9maWVsZCBGZWUKaXR4bl9zdWJtaXQKcmV0c3ViCgovLyBhZGRfcHJvcG9zYWxfY2FzdGVyCmFkZHByb3Bvc2FsY2FzdGVyXzc6CnByb3RvIDAgMApieXRlY18wIC8vICIiCmR1cAppbnRjXzAgLy8gMApkdXAKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQpmcmFtZV9idXJ5IDAKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgpmcmFtZV9idXJ5IDEKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMwpidG9pCmZyYW1lX2J1cnkgMgp0eG5hIEFwcGxpY2F0aW9uQXJncyA0CmludGNfMCAvLyAwCmdldGJ5dGUKZnJhbWVfYnVyeSAzCmZyYW1lX2RpZyAwCmZyYW1lX2RpZyAxCmZyYW1lX2RpZyAyCmZyYW1lX2RpZyAzCmNhbGxzdWIgYWRkcHJvcG9zYWxfMQpyZXRzdWIKCi8vIHJlYWRfcHJvcG9zYWxfY2FzdGVyCnJlYWRwcm9wb3NhbGNhc3Rlcl84Ogpwcm90byAwIDAKYnl0ZWNfMCAvLyAiIgpkdXAKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQpmcmFtZV9idXJ5IDEKZnJhbWVfZGlnIDEKY2FsbHN1YiByZWFkcHJvcG9zYWxfMgpmcmFtZV9idXJ5IDAKYnl0ZWNfMiAvLyAweDE1MWY3Yzc1CmZyYW1lX2RpZyAwCmNvbmNhdApsb2cKcmV0c3ViCgovLyB2b3RlX3llc19jYXN0ZXIKdm90ZXllc2Nhc3Rlcl85Ogpwcm90byAwIDAKYnl0ZWNfMCAvLyAiIgp0eG5hIEFwcGxpY2F0aW9uQXJncyAxCmZyYW1lX2J1cnkgMApmcmFtZV9kaWcgMApjYWxsc3ViIHZvdGV5ZXNfMwpyZXRzdWIKCi8vIHZvdGVfbm9fY2FzdGVyCnZvdGVub2Nhc3Rlcl8xMDoKcHJvdG8gMCAwCmJ5dGVjXzAgLy8gIiIKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQpmcmFtZV9idXJ5IDAKZnJhbWVfZGlnIDAKY2FsbHN1YiB2b3Rlbm9fNApyZXRzdWIKCi8vIGRlbGV0ZV9wcm9wb3NhbF9jYXN0ZXIKZGVsZXRlcHJvcG9zYWxjYXN0ZXJfMTE6CnByb3RvIDAgMApieXRlY18wIC8vICIiCnR4bmEgQXBwbGljYXRpb25BcmdzIDEKZnJhbWVfYnVyeSAwCmZyYW1lX2RpZyAwCmNhbGxzdWIgZGVsZXRlcHJvcG9zYWxfNQpyZXRzdWIKCi8vIGdlbmVyYXRlX21lbWJlcnNoaXBfdG9rZW5fY2FzdGVyCmdlbmVyYXRlbWVtYmVyc2hpcHRva2VuY2FzdGVyXzEyOgpwcm90byAwIDAKaW50Y18wIC8vIDAKZHVwCmJ5dGVjXzAgLy8gIiIKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQpmcmFtZV9idXJ5IDIKdHhuIEdyb3VwSW5kZXgKaW50Y18xIC8vIDEKLQpmcmFtZV9idXJ5IDEKZnJhbWVfZGlnIDEKZ3R4bnMgVHlwZUVudW0KaW50Y18xIC8vIHBheQo9PQphc3NlcnQKZnJhbWVfZGlnIDEKZnJhbWVfZGlnIDIKY2FsbHN1YiBnZW5lcmF0ZW1lbWJlcnNoaXB0b2tlbl82CmZyYW1lX2J1cnkgMApieXRlY18yIC8vIDB4MTUxZjdjNzUKZnJhbWVfZGlnIDAKaXRvYgpjb25jYXQKbG9nCnJldHN1Yg==";
    override clearProgram: string = "I3ByYWdtYSB2ZXJzaW9uIDgKcHVzaGludCAwIC8vIDAKcmV0dXJu";
    override methods: algosdk.ABIMethod[] = [
        new algosdk.ABIMethod({ name: "add_proposal", desc: "", args: [{ type: "string", name: "name", desc: "" }, { type: "string", name: "description", desc: "" }, { type: "uint64", name: "end_time", desc: "" }, { type: "asset", name: "membership_token", desc: "" }], returns: { type: "void", desc: "" } }),
        new algosdk.ABIMethod({ name: "read_proposal", desc: "", args: [{ type: "string", name: "name", desc: "" }], returns: { type: "(string,string,bool,uint64,uint64,uint64)", desc: "" } }),
        new algosdk.ABIMethod({ name: "vote_yes", desc: "", args: [{ type: "string", name: "proposal_name", desc: "" }], returns: { type: "void", desc: "" } }),
        new algosdk.ABIMethod({ name: "vote_no", desc: "", args: [{ type: "string", name: "proposal_name", desc: "" }], returns: { type: "void", desc: "" } }),
        new algosdk.ABIMethod({ name: "delete_proposal", desc: "", args: [{ type: "string", name: "proposal_name", desc: "" }], returns: { type: "void", desc: "" } }),
        new algosdk.ABIMethod({ name: "generate_membership_token", desc: "", args: [{ type: "pay", name: "seed", desc: "" }, { type: "string", name: "token_name", desc: "" }], returns: { type: "uint64", desc: "" } })
    ];
    async add_proposal(args: {
        name: string;
        description: string;
        end_time: bigint;
        membership_token: bigint;
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<void>> {
        const result = await this.execute(await this.compose.add_proposal({ name: args.name, description: args.description, end_time: args.end_time, membership_token: args.membership_token }, txnParams));
        return new bkr.ABIResult<void>(result);
    }
    async read_proposal(args: {
        name: string;
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<[
        string,
        string,
        boolean,
        bigint,
        bigint,
        bigint
    ]>> {
        const result = await this.execute(await this.compose.read_proposal({ name: args.name }, txnParams));
        return new bkr.ABIResult<[
            string,
            string,
            boolean,
            bigint,
            bigint,
            bigint
        ]>(result, result.returnValue as [
            string,
            string,
            boolean,
            bigint,
            bigint,
            bigint
        ]);
    }
    async vote_yes(args: {
        proposal_name: string;
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<void>> {
        const result = await this.execute(await this.compose.vote_yes({ proposal_name: args.proposal_name }, txnParams));
        return new bkr.ABIResult<void>(result);
    }
    async vote_no(args: {
        proposal_name: string;
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<void>> {
        const result = await this.execute(await this.compose.vote_no({ proposal_name: args.proposal_name }, txnParams));
        return new bkr.ABIResult<void>(result);
    }
    async delete_proposal(args: {
        proposal_name: string;
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<void>> {
        const result = await this.execute(await this.compose.delete_proposal({ proposal_name: args.proposal_name }, txnParams));
        return new bkr.ABIResult<void>(result);
    }
    async generate_membership_token(args: {
        seed: algosdk.TransactionWithSigner | algosdk.Transaction;
        token_name: string;
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<bigint>> {
        const result = await this.execute(await this.compose.generate_membership_token({ seed: args.seed, token_name: args.token_name }, txnParams));
        return new bkr.ABIResult<bigint>(result, result.returnValue as bigint);
    }
    compose = {
        add_proposal: async (args: {
            name: string;
            description: string;
            end_time: bigint;
            membership_token: bigint;
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "add_proposal"), { name: args.name, description: args.description, end_time: args.end_time, membership_token: args.membership_token }, txnParams, atc);
        },
        read_proposal: async (args: {
            name: string;
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "read_proposal"), { name: args.name }, txnParams, atc);
        },
        vote_yes: async (args: {
            proposal_name: string;
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "vote_yes"), { proposal_name: args.proposal_name }, txnParams, atc);
        },
        vote_no: async (args: {
            proposal_name: string;
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "vote_no"), { proposal_name: args.proposal_name }, txnParams, atc);
        },
        delete_proposal: async (args: {
            proposal_name: string;
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "delete_proposal"), { proposal_name: args.proposal_name }, txnParams, atc);
        },
        generate_membership_token: async (args: {
            seed: algosdk.TransactionWithSigner | algosdk.Transaction;
            token_name: string;
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "generate_membership_token"), { seed: args.seed, token_name: args.token_name }, txnParams, atc);
        }
    };
}