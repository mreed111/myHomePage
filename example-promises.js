// challenge

function addPromise (a,b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('addPromise requires two numbers.')
    }
  });
}

addPromise(5,5).then(function (sum) {
  console.log('Promise success:', sum);
}, function (err) {
  console.log('Promise error:', err);
});

addPromise(5,'5').then(function (sum) {
  console.log('Promise success:', sum);
}, function (err) {
  console.log('Promise error:', err);
});
