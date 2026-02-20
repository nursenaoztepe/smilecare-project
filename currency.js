async function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const currency = document.getElementById("currency").value;

    if (amount === "") {
        document.getElementById("result").innerText = "Lütfen miktar giriniz.";
        return;
    }

    try {
        const response = await fetch(`https://open.er-api.com/v6/latest/${currency}`);
        const data = await response.json();

        const rate = data.rates.TRY;
        const result = amount * rate;

        document.getElementById("result").innerText =
            `${amount} ${currency} = ${result.toFixed(2)} TL`;
    } catch (error) {
        document.getElementById("result").innerText =
            "Veri alınamadı. Lütfen tekrar deneyin.";
    }
}