// Automatically generated with Reach 0.1.3
/* eslint-disable */
export const _version = '0.1.3';
export const _backendVersion = 1;


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      }
    };
  
  };

export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };

export async function Alice(ctc, interact) {
  if (typeof(ctc) !== 'object' || ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const v16 = await ctc.creationTime();
  const v17 = await ctc.creationSecs();
  
  const v137 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v137],
    evt_cnt: 1,
    funcNum: 1,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v137, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const [v141] = txn1.data;
      const v142 = txn1.time;
      const v143 = txn1.secs;
      const v140 = txn1.from;
      
      sim_r.txns.push({
        amt: v141,
        kind: 'to',
        tok: undefined
        });
      const v147 = stdlib.add(v142, stdlib.checkedBigNumberify('./index.rsh:41:26:decimal', stdlib.UInt_max, 10240));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const [v141] = txn1.data;
  const v142 = txn1.time;
  const v143 = txn1.secs;
  const v140 = txn1.from;
  ;
  const v147 = stdlib.add(v142, stdlib.checkedBigNumberify('./index.rsh:41:26:decimal', stdlib.UInt_max, 10240));
  const txn2 = await (ctc.recv({
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: ['time', v147],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v140, v141, v147],
      evt_cnt: 0,
      funcNum: 3,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const [] = txn3.data;
        const v222 = txn3.time;
        const v223 = txn3.secs;
        const v221 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v225 = stdlib.addressEq(v140, v221);
        stdlib.assert(v225, {
          at: 'reach standard library:209:7:dot',
          fs: ['at ./index.rsh:41:46:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        sim_r.txns.push({
          amt: v141,
          kind: 'from',
          to: v140,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc2, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const [] = txn3.data;
    const v222 = txn3.time;
    const v223 = txn3.secs;
    const v221 = txn3.from;
    ;
    const v225 = stdlib.addressEq(v140, v221);
    stdlib.assert(v225, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:41:46:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:41:109:application',
      fs: ['at ./index.rsh:41:64:application call to [unknown function] (defined at: ./index.rsh:41:82:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:41:57:function exp)', 'at ./index.rsh:41:46:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    }
  else {
    const [] = txn2.data;
    const v152 = txn2.time;
    const v153 = txn2.secs;
    const v151 = txn2.from;
    const v155 = stdlib.add(v141, v141);
    ;
    const v158 = stdlib.protect(ctc0, await interact.submitTime(), {
      at: './index.rsh:46:49:application',
      fs: ['at ./index.rsh:45:13:application call to [unknown function] (defined at: ./index.rsh:45:17:function exp)'],
      msg: 'submitTime',
      who: 'Alice'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v140, v151, v155, v158],
      evt_cnt: 1,
      funcNum: 4,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const [v160] = txn3.data;
        const v161 = txn3.time;
        const v162 = txn3.secs;
        const v159 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v164 = stdlib.addressEq(v140, v159);
        stdlib.assert(v164, {
          at: './index.rsh:48:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v166 = stdlib.add(v161, stdlib.checkedBigNumberify('./index.rsh:55:30:decimal', stdlib.UInt_max, 10240));
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc2, ctc2, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const [v160] = txn3.data;
    const v161 = txn3.time;
    const v162 = txn3.secs;
    const v159 = txn3.from;
    ;
    const v164 = stdlib.addressEq(v140, v159);
    stdlib.assert(v164, {
      at: './index.rsh:48:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v166 = stdlib.add(v161, stdlib.checkedBigNumberify('./index.rsh:55:30:decimal', stdlib.UInt_max, 10240));
    const txn4 = await (ctc.recv({
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc0],
      timeoutAt: ['time', v166],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v140, v151, v155, v160, v166],
        evt_cnt: 0,
        funcNum: 6,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const [] = txn5.data;
          const v206 = txn5.time;
          const v207 = txn5.secs;
          const v205 = txn5.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v209 = stdlib.addressEq(v140, v205);
          stdlib.assert(v209, {
            at: 'reach standard library:209:7:dot',
            fs: ['at ./index.rsh:55:50:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          sim_r.txns.push({
            amt: v155,
            kind: 'from',
            to: v140,
            tok: undefined
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined,
        tys: [ctc2, ctc2, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const [] = txn5.data;
      const v206 = txn5.time;
      const v207 = txn5.secs;
      const v205 = txn5.from;
      ;
      const v209 = stdlib.addressEq(v140, v205);
      stdlib.assert(v209, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./index.rsh:55:50:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './index.rsh:55:113:application',
        fs: ['at ./index.rsh:55:68:application call to [unknown function] (defined at: ./index.rsh:55:86:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:55:61:function exp)', 'at ./index.rsh:55:50:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      
      return;
      }
    else {
      const [v172] = txn4.data;
      const v173 = txn4.time;
      const v174 = txn4.secs;
      const v171 = txn4.from;
      ;
      const v176 = stdlib.addressEq(v151, v171);
      stdlib.assert(v176, {
        at: './index.rsh:55:7:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v177 = stdlib.lt(v160, v172);
      const v178 = stdlib.lt(v172, v160);
      const v179 = [stdlib.checkedBigNumberify('./index.rsh:57:62:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:57:65:decimal', stdlib.UInt_max, 2)];
      const v180 = [stdlib.checkedBigNumberify('./index.rsh:57:71:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:57:74:decimal', stdlib.UInt_max, 1)];
      const v181 = v178 ? v179 : v180;
      const v182 = [stdlib.checkedBigNumberify('./index.rsh:57:37:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:57:40:decimal', stdlib.UInt_max, 0)];
      const v183 = v177 ? v182 : v181;
      const v185 = v183[stdlib.checkedBigNumberify('./index.rsh:59:32:array ref', stdlib.UInt_max, 0)];
      const v186 = stdlib.mul(v155, v185);
      const v187 = stdlib.div(v186, stdlib.checkedBigNumberify('./index.rsh:59:38:decimal', stdlib.UInt_max, 2));
      const v191 = stdlib.sub(v155, v187);
      ;
      ;
      const v201 = v183[stdlib.checkedBigNumberify('./index.rsh:65:32:array ref', stdlib.UInt_max, 1)];
      stdlib.protect(ctc1, await interact.seeResult(v201), {
        at: './index.rsh:65:23:application',
        fs: ['at ./index.rsh:64:7:application call to [unknown function] (defined at: ./index.rsh:64:25:function exp)'],
        msg: 'seeResult',
        who: 'Alice'
        });
      
      return;}
    
    }
  
  
  };
export async function Bob(ctc, interact) {
  if (typeof(ctc) !== 'object' || ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const v16 = await ctc.creationTime();
  const v17 = await ctc.creationSecs();
  
  const txn1 = await (ctc.recv({
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const [v141] = txn1.data;
  const v142 = txn1.time;
  const v143 = txn1.secs;
  const v140 = txn1.from;
  ;
  const v147 = stdlib.add(v142, stdlib.checkedBigNumberify('./index.rsh:41:26:decimal', stdlib.UInt_max, 10240));
  stdlib.protect(ctc1, await interact.acceptWager(v141), {
    at: './index.rsh:39:25:application',
    fs: ['at ./index.rsh:38:11:application call to [unknown function] (defined at: ./index.rsh:38:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v140, v141, v147],
    evt_cnt: 0,
    funcNum: 2,
    onlyIf: true,
    out_tys: [],
    pay: [v141, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const [] = txn2.data;
      const v152 = txn2.time;
      const v153 = txn2.secs;
      const v151 = txn2.from;
      
      const v155 = stdlib.add(v141, v141);
      sim_r.txns.push({
        amt: v141,
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v147],
    tys: [ctc2, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv({
      evt_cnt: 0,
      funcNum: 3,
      out_tys: [],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const [] = txn3.data;
    const v222 = txn3.time;
    const v223 = txn3.secs;
    const v221 = txn3.from;
    ;
    const v225 = stdlib.addressEq(v140, v221);
    stdlib.assert(v225, {
      at: 'reach standard library:209:7:dot',
      fs: ['at ./index.rsh:41:46:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'sender correct',
      who: 'Bob'
      });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:41:109:application',
      fs: ['at ./index.rsh:41:64:application call to [unknown function] (defined at: ./index.rsh:41:82:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:41:57:function exp)', 'at ./index.rsh:41:46:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    }
  else {
    const [] = txn2.data;
    const v152 = txn2.time;
    const v153 = txn2.secs;
    const v151 = txn2.from;
    const v155 = stdlib.add(v141, v141);
    ;
    const txn3 = await (ctc.recv({
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc0],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const [v160] = txn3.data;
    const v161 = txn3.time;
    const v162 = txn3.secs;
    const v159 = txn3.from;
    ;
    const v164 = stdlib.addressEq(v140, v159);
    stdlib.assert(v164, {
      at: './index.rsh:48:9:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const v166 = stdlib.add(v161, stdlib.checkedBigNumberify('./index.rsh:55:30:decimal', stdlib.UInt_max, 10240));
    const v170 = stdlib.protect(ctc0, await interact.submitTime(), {
      at: './index.rsh:53:49:application',
      fs: ['at ./index.rsh:52:11:application call to [unknown function] (defined at: ./index.rsh:52:15:function exp)'],
      msg: 'submitTime',
      who: 'Bob'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v140, v151, v155, v160, v166, v170],
      evt_cnt: 1,
      funcNum: 5,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const [v172] = txn4.data;
        const v173 = txn4.time;
        const v174 = txn4.secs;
        const v171 = txn4.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v176 = stdlib.addressEq(v151, v171);
        stdlib.assert(v176, {
          at: './index.rsh:55:7:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v177 = stdlib.lt(v160, v172);
        const v178 = stdlib.lt(v172, v160);
        const v179 = [stdlib.checkedBigNumberify('./index.rsh:57:62:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:57:65:decimal', stdlib.UInt_max, 2)];
        const v180 = [stdlib.checkedBigNumberify('./index.rsh:57:71:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:57:74:decimal', stdlib.UInt_max, 1)];
        const v181 = v178 ? v179 : v180;
        const v182 = [stdlib.checkedBigNumberify('./index.rsh:57:37:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:57:40:decimal', stdlib.UInt_max, 0)];
        const v183 = v177 ? v182 : v181;
        const v185 = v183[stdlib.checkedBigNumberify('./index.rsh:59:32:array ref', stdlib.UInt_max, 0)];
        const v186 = stdlib.mul(v155, v185);
        const v187 = stdlib.div(v186, stdlib.checkedBigNumberify('./index.rsh:59:38:decimal', stdlib.UInt_max, 2));
        const v191 = stdlib.sub(v155, v187);
        sim_r.txns.push({
          amt: v187,
          kind: 'from',
          to: v140,
          tok: undefined
          });
        sim_r.txns.push({
          amt: v191,
          kind: 'from',
          to: v151,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v166],
      tys: [ctc2, ctc2, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.recv({
        evt_cnt: 0,
        funcNum: 6,
        out_tys: [],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const [] = txn5.data;
      const v206 = txn5.time;
      const v207 = txn5.secs;
      const v205 = txn5.from;
      ;
      const v209 = stdlib.addressEq(v140, v205);
      stdlib.assert(v209, {
        at: 'reach standard library:209:7:dot',
        fs: ['at ./index.rsh:55:50:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
        });
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './index.rsh:55:113:application',
        fs: ['at ./index.rsh:55:68:application call to [unknown function] (defined at: ./index.rsh:55:86:function exp)', 'at reach standard library:212:8:application call to "after" (defined at: ./index.rsh:55:61:function exp)', 'at ./index.rsh:55:50:application call to "closeTo" (defined at: reach standard library:207:8:function exp)'],
        msg: 'informTimeout',
        who: 'Bob'
        });
      
      return;
      }
    else {
      const [v172] = txn4.data;
      const v173 = txn4.time;
      const v174 = txn4.secs;
      const v171 = txn4.from;
      ;
      const v176 = stdlib.addressEq(v151, v171);
      stdlib.assert(v176, {
        at: './index.rsh:55:7:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v177 = stdlib.lt(v160, v172);
      const v178 = stdlib.lt(v172, v160);
      const v179 = [stdlib.checkedBigNumberify('./index.rsh:57:62:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:57:65:decimal', stdlib.UInt_max, 2)];
      const v180 = [stdlib.checkedBigNumberify('./index.rsh:57:71:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:57:74:decimal', stdlib.UInt_max, 1)];
      const v181 = v178 ? v179 : v180;
      const v182 = [stdlib.checkedBigNumberify('./index.rsh:57:37:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:57:40:decimal', stdlib.UInt_max, 0)];
      const v183 = v177 ? v182 : v181;
      const v185 = v183[stdlib.checkedBigNumberify('./index.rsh:59:32:array ref', stdlib.UInt_max, 0)];
      const v186 = stdlib.mul(v155, v185);
      const v187 = stdlib.div(v186, stdlib.checkedBigNumberify('./index.rsh:59:38:decimal', stdlib.UInt_max, 2));
      const v191 = stdlib.sub(v155, v187);
      ;
      ;
      const v204 = v183[stdlib.checkedBigNumberify('./index.rsh:65:32:array ref', stdlib.UInt_max, 1)];
      stdlib.protect(ctc1, await interact.seeResult(v204), {
        at: './index.rsh:65:23:application',
        fs: ['at ./index.rsh:64:7:application call to [unknown function] (defined at: ./index.rsh:64:25:function exp)'],
        msg: 'seeResult',
        who: 'Bob'
        });
      
      return;}
    
    }
  
  
  };

const _ALGO = {
  appApproval: `#pragma version 4
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
substring 0 32
store 1
substring 32 64
store 2
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
dup
bz ctor
// Handler 1
dup
int 1
==
bz l0
pop
txna ApplicationArgs 1
dup
len
int 0
==
assert
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 255
pop
// compute state in HM_Check 0
int 8
bzero
sha256
load 1
==
assert
// "CheckPay"
// "./index.rsh:34:9:dot"
// "[]"
load 255
dup
bz l1
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Receiver
==
assert
l1:
pop
global Round
int 10240
+
store 254
// compute state in HM_Set 1
byte base64(AAAAAAAAAAE=)
txn Sender
concat
load 255
itob
concat
load 254
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l0:
// Handler 2
dup
int 2
==
bz l2
pop
txna ApplicationArgs 1
dup
len
int 48
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 1
byte base64(AAAAAAAAAAE=)
load 255
concat
load 254
itob
concat
load 253
itob
concat
sha256
load 1
==
assert
global Round
load 253
<
assert
load 254
dup
+
store 252
// "CheckPay"
// "./index.rsh:41:7:dot"
// "[]"
load 254
dup
bz l3
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Receiver
==
assert
l3:
pop
// compute state in HM_Set 3
byte base64(AAAAAAAAAAM=)
load 255
concat
txn Sender
concat
load 252
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l2:
// Handler 3
dup
int 3
==
bz l4
pop
txna ApplicationArgs 1
dup
len
int 48
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 1
byte base64(AAAAAAAAAAE=)
load 255
concat
load 254
itob
concat
load 253
itob
concat
sha256
load 1
==
assert
global Round
load 253
>=
assert
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:41:46:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:41:46:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
txn Sender
==
assert
load 254
dup
bz l5
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l5:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l6:
pop
global ZeroAddress
store 1
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l4:
// Handler 4
dup
int 4
==
bz l7
pop
txna ApplicationArgs 1
dup
len
int 72
==
assert
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 72
btoi
store 253
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 252
pop
// compute state in HM_Check 3
byte base64(AAAAAAAAAAM=)
load 255
concat
load 254
concat
load 253
itob
concat
sha256
load 1
==
assert
// "CheckPay"
// "./index.rsh:48:9:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:48:9:dot"
// "[]"
load 255
txn Sender
==
assert
global Round
int 10240
+
store 251
// compute state in HM_Set 4
byte base64(AAAAAAAAAAQ=)
load 255
concat
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l7:
// Handler 5
dup
int 5
==
bz l8
pop
txna ApplicationArgs 1
dup
len
int 88
==
assert
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 72
btoi
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 88
btoi
store 251
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 250
pop
// compute state in HM_Check 4
byte base64(AAAAAAAAAAQ=)
load 255
concat
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
sha256
load 1
==
assert
global Round
load 251
<
assert
// "CheckPay"
// "./index.rsh:55:7:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:55:7:dot"
// "[]"
load 254
txn Sender
==
assert
load 253
byte base64(AAAAAAAAAAEAAAAAAAAAAQ==)
byte base64(AAAAAAAAAAAAAAAAAAAAAg==)
load 250
load 252
<
select
byte base64(AAAAAAAAAAIAAAAAAAAAAA==)
load 252
load 250
<
select
substring 0 8
btoi
*
int 2
/
dup
store 249
dup
bz l9
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l9:
pop
load 253
load 249
-
dup
bz l10
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 254
dig 1
gtxns Receiver
==
assert
l10:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l11:
pop
global ZeroAddress
store 1
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l8:
// Handler 6
dup
int 6
==
bz l12
pop
txna ApplicationArgs 1
dup
len
int 88
==
assert
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 72
btoi
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 88
btoi
store 251
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 4
byte base64(AAAAAAAAAAQ=)
load 255
concat
load 254
concat
load 253
itob
concat
load 252
itob
concat
load 251
itob
concat
sha256
load 1
==
assert
global Round
load 251
>=
assert
// "CheckPay"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:55:50:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
// Just "sender correct"
// "reach standard library:209:7:dot"
// "[at ./index.rsh:55:50:application call to \"closeTo\" (defined at: reach standard library:207:8:function exp)]"
load 255
txn Sender
==
assert
load 253
dup
bz l13
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l13:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l14:
pop
global ZeroAddress
store 1
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l12:
int 0
assert
updateState:
byte base64()
load 1
load 2
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
byte base64()
int 64
bzero
app_global_put
b checkSize
ctor:
txn Sender
global CreatorAddress
==
assert
txna ApplicationArgs 1
store 2
// compute state in HM_Set 0
int 8
bzero
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
`,
  appClear: `#pragma version 4
int 0
`,
  escrow: `#pragma version 4
global GroupSize
int 1
-
dup
gtxns TypeEnum
int appl
==
assert
gtxns ApplicationID
int {{ApplicationID}}
==
assert
done:
int 1
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  unsupported: [],
  version: 2,
  viewKeys: 0,
  viewSize: 0
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "svs",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v141",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v140",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v141",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v147",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v140",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v141",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v147",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v140",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v151",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v155",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v160",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v140",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v151",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v155",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v160",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v166",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v172",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v140",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v151",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v155",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v160",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v166",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "svs",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v141",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v140",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v141",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v147",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v140",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v141",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v147",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v140",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v151",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v155",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v160",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v140",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v151",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v155",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v160",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v166",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v172",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v140",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v151",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v155",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v160",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v166",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805180820182524381524260209182015281516000818301819052818401819052835180830385018152606090920190935280519101209055610c61806100766000396000f3fe6080604052600436106100595760003560e01c80630f58c718146100655780631dc091ad1461007a5780632438df701461008d578063518f91bb146100a0578063b6f7dafa146100b3578063e163d7c4146100c657600080fd5b3661006057005b600080fd5b6100786100733660046109d0565b6100d9565b005b6100786100883660046109ec565b6101e0565b61007861009b3660046109fe565b610310565b6100786100ae3660046109d0565b610439565b6100786100c13660046109fe565b610627565b6100786100d43660046109fe565b6107a6565b604051610115906100f1906004908490602001610b91565b6040516020818303038152906040528051906020012060001c6000541460196108a5565b6000805561012b6080820135431015601a6108a5565b7fca42aa17349aa5ae73b45dd8039ccae62a03996f402884816a2ef664c1d3570c8160405161015a9190610ade565b60405180910390a161016e341560176108a5565b6101903361017f6020840184610993565b6001600160a01b03161460186108a5565b61019d6020820182610993565b604080516001600160a01b0392909216919083013580156108fc02916000818181858888f193505050501580156101d8573d6000803e3d6000fd5b506000805533ff5b61023260006101f260208401846109b5565b60405160200161020e9291909182521515602082015260400190565b6040516020818303038152906040528051906020012060001c6000541460086108a5565b600080805560408051602081018252918252517f120854c39fdbc847613c8c1a66d23aa6d099c4db8f64d852475191e60a6298d990610272908490610b05565b60405180910390a161028b3460208401351460076108a5565b61029761280043610ba5565b81526040805160608082018352600082840190815233835260208681013581850190815286518352855160019281019290925284516001600160a01b0316958201959095529351918401919091525160808301529060a0015b60408051601f198184030181529190528051602090910120600055505050565b60405161034c90610328906001908490602001610b69565b6040516020818303038152906040528051906020012060001c60005414600a6108a5565b60008080556040805160208101825291825261036e908301354310600b6108a5565b7f1ca594b20641191c893d80895212a20239e99e17b7304a35c096140ec34f22dd8260405161039d9190610b26565b60405180910390a16103b3602083013580610ba5565b81526103c63460208401351460096108a5565b604080516060810182526000808252602080830182905292820152906103ee90840184610993565b6001600160a01b03908116825233602080840191825284516040808601918252805160039381019390935285518516908301529151909216606083015251608082015260a0016102f0565b60405161047590610451906004908490602001610b91565b6040516020818303038152906040528051906020012060001c6000541460156108a5565b600080556104816108ce565b6104926080830135431060166108a5565b7fb5aa87837f36aeb77deade89a43428651cc25dcc6d1260af16d52527692e7d0c826040516104c19190610ac2565b60405180910390a16104d5341560136108a5565b6104fa336104e96040850160208601610993565b6001600160a01b03161460146108a5565b805160009081905281516002602091820181905281840180516001908190529051830152604084018051829052519091019190915260a083013560608401351061055e57606083013560a084013510610557578160200151610564565b8151610564565b81604001515b51610573906040850135610bdf565b61057d9190610bbd565b606082015261058f6020830183610993565b6001600160a01b03166108fc82606001519081150290604051600060405180830381858888f193505050501580156105cb573d6000803e3d6000fd5b506105dc6040830160208401610993565b6001600160a01b03166108fc826060015184600001604001356105ff9190610bfe565b6040518115909202916000818181858888f193505050501580156101d8573d6000803e3d6000fd5b6040516106639061063f906003908490602001610b7d565b6040516020818303038152906040528051906020012060001c6000541460126108a5565b600080805560408051602081018252918252517fdcfbe2406bce1dcbc2da343dbe7ffc9e21f6ddfe15513855c5d41dc1d07c0aed906106a3908490610b4d565b60405180910390a16106b7341560106108a5565b6106d9336106c86020850185610993565b6001600160a01b03161460116108a5565b6106e561280043610ba5565b81526040805160a081018252600080825260208083018290529282018190526060820181905260808201529061071d90840184610993565b6001600160a01b031681526107386040840160208501610993565b6001600160a01b03908116602083810191825260408681013581860190815260608089013581880190815288516080808a01918252855160049781019790975289518916958701959095529551909616908401525190820152915160a08301525160c082015260e0016102f0565b6040516107e2906107be906001908490602001610b69565b6040516020818303038152906040528051906020012060001c60005414600e6108a5565b600080556107f86040820135431015600f6108a5565b7fc3d6ba703f6ce931b1dd0e05e983d8be7c8ccc7f15219d844425151d85623013816040516108279190610b26565b60405180910390a161083b3415600c6108a5565b61085d3361084c6020840184610993565b6001600160a01b031614600d6108a5565b61086a6020820182610993565b6040516001600160a01b039190911690602083013580156108fc02916000818181858888f193505050501580156101d8573d6000803e3d6000fd5b816108ca5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160c0810190915260006080820181815260a08301919091528190815260200161090e604051806040016040528060008152602001600081525090565b8152602001610930604051806040016040528060008152602001600081525090565b8152602001600081525090565b80356001600160a01b038116811461095457600080fd5b919050565b8035801515811461095457600080fd5b600060c0828403121561097b57600080fd5b50919050565b60006080828403121561097b57600080fd5b6000602082840312156109a557600080fd5b6109ae8261093d565b9392505050565b6000602082840312156109c757600080fd5b6109ae82610959565b600060c082840312156109e257600080fd5b6109ae8383610969565b60006040828403121561097b57600080fd5b600060808284031215610a1057600080fd5b6109ae8383610981565b6001600160a01b03610a2b8261093d565b16825260208181013590830152604090810135910152565b6001600160a01b0380610a558361093d565b16835280610a656020840161093d565b16602084015250604090810135910152565b6001600160a01b0380610a898361093d565b16835280610a996020840161093d565b166020840152506040810135604083015260608101356060830152608081013560808301525050565b60c08101610ad08284610a77565b60a092830135919092015290565b60c08101610aec8284610a77565b610af860a08401610959565b151560a083015292915050565b60408101610b1283610959565b151582526020830135602083015292915050565b60808101610b348284610a1a565b610b4060608401610959565b1515606083015292915050565b60808101610b5b8284610a43565b606092830135919092015290565b828152608081016109ae6020830184610a1a565b828152608081016109ae6020830184610a43565b82815260c081016109ae6020830184610a77565b60008219821115610bb857610bb8610c15565b500190565b600082610bda57634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615610bf957610bf9610c15565b500290565b600082821015610c1057610c10610c15565b500390565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220158bfbc2bb78cd07d5affa87b33f11393037d9375951b46f579fb7bd9cbdc54564736f6c63430008050033`,
  BytecodeLen: 3287,
  Which: `oD`,
  deployMode: `DM_constructor`,
  version: 1,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

