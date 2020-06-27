const array = process.argv.slice(2)

for (let ele of array) {
  const reg = /^[0-9]+.?[0-9]*$/;
  ele = parseInt(ele);

  if (reg.test(ele) && ele > 0){
    setTimeout(function () {
      process.stdout.write('\007');
    }, ele * 1000)
  }
}