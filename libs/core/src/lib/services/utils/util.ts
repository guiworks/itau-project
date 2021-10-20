export function scrollToId(questions: string) {
  document.getElementById(questions)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  });
}
