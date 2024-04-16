
export function getDate() {
  const date = new Date()
  return new Intl.DateTimeFormat('en-US', {weekday: 'long', day: 'numeric', month: 'short', year: 'numeric'})
    .format(date);
}
