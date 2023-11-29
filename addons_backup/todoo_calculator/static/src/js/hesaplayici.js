document.getElementById('madde-kalinlikA').disabled = true;
document.getElementById('madde-kalinlikB').disabled = true;
document.getElementById('madde-genislik').disabled = true;
document.getElementById('madde-uzunluk').disabled = true;
document.getElementById('madde-adet').disabled = true;
document.getElementById('madde-cap').disabled = true;
document.getElementById('madde-boyut').disabled = true;
document.getElementById('madde-yukseklik').disabled = true;
document.getElementById('madde-dis-cap').disabled = true;
document.getElementById('madde-ic-cap').disabled = true;

/*
**CONTROL ITEMS**
alert(madde_genislik.value);
alert(madde_kalinlikA.value);
alert(madde_kalinlikB.value);
alert(madde_yukseklik.value);
alert(madde_uzunluk.value);
alert(madde_ozgul_agirlik.value);
alert(madde_adet.value);
alert(sonuc.value);
alert(sonuc)
*/

function hesaplayıcı() {
    var yapilanSecim = document.getElementById('kesim-turu');
    var secim = yapilanSecim.value;
    if (secim == "levha") {
        LevhaSecim();
    } else if (secim == 'doluyuvarlakcubuk') {
        DoluYuvarlakCubukSecim();
    } else if (secim == 'dolukarecubuk') {
        DoluKareCubukSecim();
    } else if (secim == 'dolualtigencubuk') {
        DoluAltigenCubukSecim();
    } else if (secim == 'kosebent') {
        KosebentSecim();
    } else if (secim == 'tprofil') {
        TProfilSecim();
    } else if (secim == 'uprofil') {
        UProfilSecim();
    } else if (secim == 'ıprofil') {
        IProfilSecim();
    } else if (secim == 'kutuprofil') {
        KutuProfilSecim();
    } else if (secim == 'boruprofil') {
        BoruProfilSecim();
    } else if (secim == 'disk') {
        DiskSecim();
    }
}

function temizle() {
    var activities = document.getElementById('temizle-buton');
    activities.addEventListener('click', function () {
        document.getElementById('form-calc').reset();
        document.getElementById('madde-uzunluk').disabled = false;
        document.getElementById('madde-kalinlikA').disabled = false;
        document.getElementById('madde-genislik').disabled = false;
        document.getElementById('madde-kalinlikB').disabled = false;
        document.getElementById('madde-yukseklik').disabled = false;
        document.getElementById('madde-cap').disabled = false;
        document.getElementById('madde-boyut').disabled = false;
        document.getElementById('madde-dis-cap').disabled = false;
        document.getElementById('madde-ic-cap').disabled = false;
    });
}

function sonucYuvarla(sayi, basamak) {
    basamak = Math.pow(10, basamak);
    return Math.round(sayi * basamak) / basamak;
}

function LevhaSecim() {
    document.getElementById('madde-kalinlikB').disabled = true;
    document.getElementById('madde-cap').disabled = true;
    document.getElementById('madde-boyut').disabled = true;
    document.getElementById('madde-yukseklik').disabled = true;
    document.getElementById('madde-dis-cap').disabled = true;
    document.getElementById('madde-ic-cap').disabled = true;

    var madde_kalinlikA = document.getElementById('madde-kalinlikA');
    var madde_genislik = document.getElementById('madde-genislik');
    var madde_uzunluk = document.getElementById('madde-uzunluk');
    var madde_adet = document.getElementById('madde-adet');
    var madde_ozgul_agirlik = document.getElementById('madde-kodu-ozgul-agirlik-secimi');
    var sabit = 0.000001;
    var hesapla = document.getElementById('sonuc-buton');
    hesapla.addEventListener('click', function () {
        var sonuc = madde_kalinlikA.value * madde_genislik.value * madde_uzunluk.value * madde_ozgul_agirlik.value * sabit;
        sonuc = sonuc * madde_adet.value;
        sonuc = sonucYuvarla(sonuc,10);
        document.getElementById('sonuc-label').innerText = sonuc;
    })

}

function DoluYuvarlakCubukSecim() {

    document.getElementById('madde-kalinlikA').disabled = true;
    document.getElementById('madde-genislik').disabled = true;
    document.getElementById('madde-kalinlikB').disabled = true;
    document.getElementById('madde-boyut').disabled = true;
    document.getElementById('madde-yukseklik').disabled = true;
    document.getElementById('madde-dis-cap').disabled = true;
    document.getElementById('madde-ic-cap').disabled = true;

    var madde_cap = document.getElementById('madde-cap');
    var madde_uzunluk = document.getElementById('madde-uzunluk');
    var madde_ozgul_agirlik = document.getElementById('madde-kodu-ozgul-agirlik-secimi');
    var madde_adet = document.getElementById('madde-adet');
    var sabit = 0.000001;
    var sabit2 = 0.785;

    var hesapla = document.getElementById('sonuc-buton');
    hesapla.addEventListener('click', function () {
        var sonuc = (madde_cap.value * madde_cap.value * madde_ozgul_agirlik.value * madde_uzunluk.value * sabit2 * sabit) *
            madde_adet.value;
        sonuc = sonucYuvarla(sonuc,10);
        document.getElementById('sonuc-label').innerText = sonuc;

    })

}

function DoluKareCubukSecim() {
    document.getElementById('madde-kalinlikA').disabled = true;
    document.getElementById('madde-kalinlikB').disabled = true;
    document.getElementById('madde-genislik').disabled = true;
    document.getElementById('madde-cap').disabled = true;
    document.getElementById('madde-yukseklik').disabled = true;
    document.getElementById('madde-dis-cap').disabled = true;
    document.getElementById('madde-ic-cap').disabled = true;

    var madde_boyut = document.getElementById('madde-boyut');
    var madde_uzunluk = document.getElementById('madde-uzunluk');
    var madde_ozgul_agirlik = document.getElementById('madde-kodu-ozgul-agirlik-secimi');
    var madde_adet = document.getElementById('madde-adet');
    var sabit = 0.000001;
    var hesapla = document.getElementById('sonuc-buton');
    hesapla.addEventListener('click', function () {
        var sonuc = (madde_boyut.value * madde_boyut.value * madde_uzunluk.value * madde_ozgul_agirlik.value * sabit) * madde_adet.value;
        sonuc = sonucYuvarla(sonuc,10);
        document.getElementById('sonuc-label').innerText = sonuc;
    })
}

function DoluAltigenCubukSecim() {
    document.getElementById('madde-kalinlikB').disabled = true;
    document.getElementById('madde-genislik').disabled = true;
    document.getElementById('madde-cap').disabled = true;
    document.getElementById('madde-boyut').disabled = true;
    document.getElementById('madde-yukseklik').disabled = true;
    document.getElementById('madde-dis-cap').disabled = true;
    document.getElementById('madde-ic-cap').disabled = true;

    var madde_kalinlikA = document.getElementById('madde-kalinlikA');
    var madde_uzunluk = document.getElementById('madde-uzunluk');
    var madde_ozgul_agirlik = document.getElementById('madde-kodu-ozgul-agirlik-secimi');
    var madde_adet = document.getElementById('madde-adet');
    var sabit = 0.000001;
    var sabit2 = 0.865;
    var hesapla = document.getElementById('sonuc-buton');
    hesapla.addEventListener('click', function () {
        var sonuc = (madde_kalinlikA.value * madde_kalinlikA.value * madde_uzunluk.value * madde_ozgul_agirlik.value * sabit * sabit2) * madde_adet.value;
        sonuc = sonucYuvarla(sonuc,10);
        document.getElementById('sonuc-label').innerText = sonuc;
    })

}

function KosebentSecim() {

    document.getElementById('madde-cap').disabled = true;
    document.getElementById('madde-boyut').disabled = true;
    document.getElementById('madde-dis-cap').disabled = true;
    document.getElementById('madde-ic-cap').disabled = true;

    var madde_ozgul_agirlik = document.getElementById('madde-kodu-ozgul-agirlik-secimi');
    var madde_adet = document.getElementById('madde-adet');
    var madde_yukseklik = document.getElementById('madde-yukseklik');
    var madde_kalinlikA = document.getElementById('madde-kalinlikA');
    var madde_kalinlikB = document.getElementById('madde-kalinlikB');
    var madde_genislik = document.getElementById('madde-genislik');
    var madde_uzunluk = document.getElementById('madde-uzunluk');
    var sabit = 0.000001;
    var hesapla = document.getElementById('sonuc-buton');
    hesapla.addEventListener('click', function () {
        var sonuc = (((madde_yukseklik.value * madde_kalinlikA.value) + (madde_genislik.value - madde_kalinlikA.value) * madde_kalinlikB.value) *
            madde_uzunluk.value * madde_ozgul_agirlik.value * sabit) * madde_adet.value;
        sonuc = sonucYuvarla(sonuc,10);
        document.getElementById('sonuc-label').innerText = sonuc;
    })

}

function TProfilSecim() {
    document.getElementById('madde-cap').disabled = true;
    document.getElementById('madde-boyut').disabled = true;
    document.getElementById('madde-dis-cap').disabled = true;
    document.getElementById('madde-ic-cap').disabled = true;

    var madde_genislik = document.getElementById('madde-genislik');
    var madde_kalinlikA = document.getElementById('madde-kalinlikA');
    var madde_kalinlikB = document.getElementById('madde-kalinlikB');
    var madde_yukseklik = document.getElementById('madde-yukseklik');
    var madde_uzunluk = document.getElementById('madde-uzunluk');
    var madde_ozgul_agirlik = document.getElementById('madde-kodu-ozgul-agirlik-secimi');
    var madde_adet = document.getElementById('madde-adet');
    var sabit = 0.000001;
    var hesapla = document.getElementById('sonuc-buton');
    hesapla.addEventListener('click', function () {

        var sonuc = (((madde_genislik.value * madde_kalinlikA.value) + ((madde_yukseklik.value - madde_kalinlikA.value) *
            madde_kalinlikB.value)) * madde_uzunluk.value * madde_ozgul_agirlik.value * sabit) * madde_adet.value;
        sonuc = sonucYuvarla(sonuc,10);
        document.getElementById('sonuc-label').innerText = sonuc;

    })

}

function UProfilSecim() {
    document.getElementById('madde-cap').disabled = true;
    document.getElementById('madde-boyut').disabled = true;
    document.getElementById('madde-dis-cap').disabled = true;
    document.getElementById('madde-ic-cap').disabled = true;

    var madde_genislik = document.getElementById('madde-genislik');
    var madde_kalinlikA = document.getElementById('madde-kalinlikA');
    var madde_kalinlikB = document.getElementById('madde-kalinlikB');
    var madde_yukseklik = document.getElementById('madde-yukseklik');
    var madde_uzunluk = document.getElementById('madde-uzunluk');
    var madde_ozgul_agirlik = document.getElementById('madde-kodu-ozgul-agirlik-secimi');
    var madde_adet = document.getElementById('madde-adet');
    var sabit = 0.000001;
    var hesapla = document.getElementById('sonuc-buton');
    hesapla.addEventListener('click', function () {
        var sonuc = (((madde_genislik.value * madde_kalinlikA.value) + (2 * (madde_yukseklik.value - madde_kalinlikA.value))
            * madde_kalinlikB.value) * madde_uzunluk.value * madde_ozgul_agirlik.value * sabit) * madde_adet.value;
        sonuc = sonucYuvarla(sonuc,10);
        document.getElementById('sonuc-label').innerText = sonuc;

    })
}

function IProfilSecim() {
    document.getElementById('madde-cap').disabled = true;
    document.getElementById('madde-boyut').disabled = true;
    document.getElementById('madde-dis-cap').disabled = true;
    document.getElementById('madde-ic-cap').disabled = true;

    var madde_genislik = document.getElementById('madde-genislik');
    var madde_kalinlikA = document.getElementById('madde-kalinlikA');
    var madde_kalinlikB = document.getElementById('madde-kalinlikB');
    var madde_yukseklik = document.getElementById('madde-yukseklik');
    var madde_uzunluk = document.getElementById('madde-uzunluk');
    var madde_ozgul_agirlik = document.getElementById('madde-kodu-ozgul-agirlik-secimi');
    var madde_adet = document.getElementById('madde-adet');
    var sabit = 0.000001;
    var hesapla = document.getElementById('sonuc-buton');
    hesapla.addEventListener('click', function () {
        //madde_kalinlikB = t olacak şekilde tanımlandı.
        var sonuc = ((2 * (madde_genislik.value * madde_kalinlikB.value) + (madde_yukseklik.value - (2 * madde_kalinlikB.value))
            * madde_kalinlikA.value) * madde_uzunluk.value * madde_ozgul_agirlik.value * sabit) * madde_adet.value;
        sonuc = sonucYuvarla(sonuc,10);
        document.getElementById('sonuc-label').innerText = sonuc;

    })
}

function KutuProfilSecim() {
    document.getElementById('madde-kalinlikB').disabled = true;
    document.getElementById('madde-cap').disabled = true;
    document.getElementById('madde-boyut').disabled = true;
    document.getElementById('madde-dis-cap').disabled = true;
    document.getElementById('madde-ic-cap').disabled = true;

    var madde_genislik = document.getElementById('madde-genislik');
    var madde_kalinlikA = document.getElementById('madde-kalinlikA');
    var madde_yukseklik = document.getElementById('madde-yukseklik');
    var madde_uzunluk = document.getElementById('madde-uzunluk');
    var madde_ozgul_agirlik = document.getElementById('madde-kodu-ozgul-agirlik-secimi');
    var madde_adet = document.getElementById('madde-adet');
    var sabit = 0.000001;
    var hesapla = document.getElementById('sonuc-buton');
    hesapla.addEventListener('click', function () {
        var sonuc = (2 * ((madde_genislik.value * madde_kalinlikA.value) + (madde_yukseklik.value - (2 * madde_kalinlikA.value)) *
            madde_kalinlikA.value) * madde_uzunluk.value * madde_ozgul_agirlik.value * sabit) * madde_adet.value;
        sonuc = sonucYuvarla(sonuc,10);
        document.getElementById('sonuc-label').innerText = sonuc;

    })
}

function BoruProfilSecim() {
    document.getElementById('madde-kalinlikA').disabled = true;
    document.getElementById('madde-kalinlikB').disabled = true;
    document.getElementById('madde-genislik').disabled = true;
    document.getElementById('madde-cap').disabled = true;
    document.getElementById('madde-boyut').disabled = true;
    document.getElementById('madde-yukseklik').disabled = true;

    var madde_dis_cap = document.getElementById('madde-dis-cap');
    var madde_ic_cap = document.getElementById('madde-ic-cap');
    var madde_uzunluk = document.getElementById('madde-uzunluk');
    var madde_ozgul_agirlik = document.getElementById('madde-kodu-ozgul-agirlik-secimi');
    var madde_adet = document.getElementById('madde-adet');
    var sabit = 0.000001;
    var sabit2 = 0.785;
    var hesapla = document.getElementById('sonuc-buton');
    hesapla.addEventListener('click', function () {
        var sonuc = ((sabit2 * ((madde_dis_cap.value * madde_dis_cap.value) -
            (madde_ic_cap.value * madde_ic_cap.value))) * madde_uzunluk.value * madde_ozgul_agirlik.value * sabit) * madde_adet.value;
        sonuc = sonucYuvarla(sonuc,10);
        document.getElementById('sonuc-label').innerText = sonuc;

    })
}

function DiskSecim() {
    document.getElementById('madde-kalinlikB').disabled = true;
    document.getElementById('madde-genislik').disabled = true;
    document.getElementById('madde-uzunluk').disabled = true;
    document.getElementById('madde-cap').disabled = true;
    document.getElementById('madde-boyut').disabled = true;
    document.getElementById('madde-yukseklik').disabled = true;
    document.getElementById('madde-ic-cap').disabled = true;

    var madde_dis_cap = document.getElementById('madde-dis-cap');
    var madde_kalinlikA = document.getElementById('madde-kalinlikA');
    var madde_ozgul_agirlik = document.getElementById('madde-kodu-ozgul-agirlik-secimi');
    var madde_adet = document.getElementById('madde-adet');
    var sabit = 0.000001;
    var sabit2 = 0.785;
    var hesapla = document.getElementById('sonuc-buton');
    hesapla.addEventListener('click', function () {
        var sonuc = (sabit2 * (madde_dis_cap.value * madde_dis_cap.value) * madde_kalinlikA.value * madde_ozgul_agirlik.value * sabit) * madde_adet.value;
        sonuc = sonucYuvarla(sonuc,10);
        document.getElementById('sonuc-label').innerText = sonuc;

    })

}