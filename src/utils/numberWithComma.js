export default function numberWithCommas(number) {
    // return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    return number.toLocaleString("en-US");
}