process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', function () {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`Your name is: ${chunk}`);
    process.exit();
  }
});
process.on('exit', function () {
  process.stdout.write('This important software is now closing\n');
})
