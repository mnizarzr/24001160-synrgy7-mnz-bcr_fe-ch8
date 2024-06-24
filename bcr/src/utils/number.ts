const localeNumber = Intl.NumberFormat('id-ID', { minimumFractionDigits: 0 })

const formatRupiah = (nominal: number) => "Rp." + localeNumber.format(nominal)

export {
    formatRupiah
 }
