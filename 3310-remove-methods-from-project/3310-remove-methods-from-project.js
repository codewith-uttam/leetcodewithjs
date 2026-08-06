/**
 * @param {number} n
 * @param {number} k
 * @param {number[][]} invocations
 * @return {number[]}
 */
var remainingMethods = function(n, k, invocations) {
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of invocations) {
        adj[u].push(v);
    }
    
    const isSuspicious = new Uint8Array(n);
    const q = [k];
    isSuspicious[k] = 1;
    
    let head = 0;
    while (head < q.length) {
        const u = q[head++];
        for (let i = 0; i < adj[u].length; i++) {
            const v = adj[u][i];
            if (!isSuspicious[v]) {
                isSuspicious[v] = 1;
                q.push(v);
            }
        }
    }
    
    for (let i = 0; i < invocations.length; i++) {
        const [u, v] = invocations[i];
        if (!isSuspicious[u] && isSuspicious[v]) {
            
            const res = new Array(n);
            for (let j = 0; j < n; j++) res[j] = j;
            return res;
        }
    }
    
    const res = [];
    for (let j = 0; j < n; j++) {
        if (!isSuspicious[j]) {
            res.push(j);
        }
    }
    return res;
};
