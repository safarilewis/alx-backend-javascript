process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', function () {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
})
process.on('end', function () {
  process.stdout.write('This important software is now closing\n');
})
