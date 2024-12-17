export function startTransition() {
  document.startViewTransition(() => {
    console.log("starting transition");
  });
}
