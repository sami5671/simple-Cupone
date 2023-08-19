// step 1:
document.getElementById("btn-discount").addEventListener("click", function () {
  // step 2:
  const cuponeCode = document.getElementById("cupone");
  const cuponeCodeString = cuponeCode.value;
  const cupone = parseFloat(cuponeCodeString);

  //   step 3:
  if (cuponeCodeString === "sami123") {
    const price = document.getElementById("main-price");
    const priceValueString = price.innerText;
    const priceValue = parseFloat(priceValueString);

    //   step 3:
    const discount = (30 * priceValue) / 100;
    const discountPrice = priceValue - discount;

    //   step 4:
    const payPrice = document.getElementById("pay-price");
    const payPriceValueString = payPrice.innerText;
    payPrice.innerText = discountPrice;
  } else {
    alert("enter valid cupone code!!!");
  }
  cuponeCode.value = "";
});
