async function main(): Promise<void> {
  alert('Hello world!');
}

main().catch((exception) => {
  alert((exception as Error).message);
});
