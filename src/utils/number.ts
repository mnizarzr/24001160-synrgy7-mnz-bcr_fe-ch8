const localeNumber = Intl.NumberFormat('id-ID', { minimumFractionDigits: 0 })

const formatRupiah = (nominal: number) => "Rp." + localeNumber.format(nominal)

const getRandomInt = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export {
    formatRupiah,
    getRandomInt
}
