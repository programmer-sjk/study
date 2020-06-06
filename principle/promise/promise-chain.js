const wait = time => new Promise(
    res => setTimeout(() => res(), time)
  );

  wait(100)
    .then( _ => new Promise(res => res('foo')))
    .then(r => console.log(r))
    .then(() => console.log('last then'))