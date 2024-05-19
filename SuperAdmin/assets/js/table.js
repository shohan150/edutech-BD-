const paymentStatusSpans = document.querySelectorAll(
  ".fees-info .payment-status"
);

paymentStatusSpans.forEach((span) => {
  const textContent = span.textContent.trim().toLowerCase();
  if (textContent === "paid") {
    span.classList.add("paid");
  } else if (textContent === "unpaid") {
    span.classList.add("unpaid");
  }
});

const ps = new PerfectScrollbar(".routine", {
  wheelSpeed: 2,
  wheelPropagation: true,
  minScrollbarLength: 20,
});
ps.update();
