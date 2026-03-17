import VectorImageLayer from 'ol/layer/VectorImage';
import Static from 'ol/source/ImageStatic';

const Banja_Luka = '/geoloske_slike/BANJA.jpg';
const Banja_Luka_Modal = '/citave_slike/Banja_Luka_Modal.jpg';

const Bihac = '/geoloske_slike/BIHAC.jpg';
const Bihac_Modal = '/citave_slike/Bihac_Modal.jpg';

const Bijeljina = '/geoloske_slike/BIJELJINA.jpg';
const Bijeljina_Modal = '/citave_slike/Bijeljina_Modal.jpg';

const Bosanska_Krupa = '/geoloske_slike/BOSANSKA_KRUPA.jpg';
const Bosanska_Krupa_Modal = '/citave_slike/Bosanska_Krupa_Modal.jpg';

const Brcko = '/geoloske_slike/BRCKO.jpg';
const Brcko_Modal = '/citave_slike/Brcko_Modal.jpg';

const Bugojno = '/geoloske_slike/BUGOJNO.jpg';
const Bugojno_Modal = '/citave_slike/Bugojno_Modal.jpg';

const Derventa = '/geoloske_slike/DERVENTA.jpg';
const Derventa_Modal = '/citave_slike/Derventa_Modal.jpg';

const Doboj = '/geoloske_slike/DOBOJ.jpg';
const Doboj_Modal = '/citave_slike/Doboj_Modal.jpg';

const Drvar = '/geoloske_slike/DRVAR.jpg';
const Drvar_Modal = '/citave_slike/Drvar_Modal.jpg';

const Foca = '/geoloske_slike/FOCA.jpg';
const Foca_Modal = '/citave_slike/Foca_Modal.jpg';

const Gacko = '/geoloske_slike/GACKO.jpg';
const Gacko_Modal = '/citave_slike/Gacko_Modal.jpg';

const Glamoc = '/geoloske_slike/GLAMOC.jpg';
const Glamoc_Modal = '/citave_slike/Glamoc_Modal.jpg';

const Imotski = '/geoloske_slike/IMOTSKI.jpg';
const Imotski_Modal = '/citave_slike/Imotski_Modal.jpg';

const Jajce = '/geoloske_slike/JAJCE.jpg';
const Jajce_Modal = '/citave_slike/Jajce_Modal.jpg';

const Kalinovik = '/geoloske_slike/KALINOVIK.jpg';
const Kalinovik_Modal = '/citave_slike/Kalinovik_Modal.jpg';

const Kljuc = '/geoloske_slike/KLJUC.jpg';
const Kljuc_Modal = '/citave_slike/Kljuc_Modal.jpg';

const Kostajnica = '/geoloske_slike/KOSTAJNICA.jpg';
const Kostajnica_Modal = '/citave_slike/Kostajnica_Modal.jpg';

const Livno = '/geoloske_slike/LIVNO.jpg';
const Livno_Modal = '/citave_slike/Livno_Modal.jpg';

const Ljubovija = '/geoloske_slike/LJUBOVIJA.jpg';
const Ljubovija_Modal = '/citave_slike/Ljubovija_Modal.jpg';

const Metkovic = '/geoloske_slike/METKOVIC.jpg';
const Metkovic_Modal = '/citave_slike/Metkovic_Modal.jpg';

const Mostar = '/geoloske_slike/MOSTAR.jpg';
const Mostar_Modal = '/citave_slike/Mostar_Modal.jpg';

const Nova_Gradiska = '/geoloske_slike/NOVA_GRADISKA.jpg';
const Nova_Gradiska_Modal = '/citave_slike/Nova_Gradiska_Modal.jpg';

const Nova_Kapela = '/geoloske_slike/NOVA_KAPELA.jpg';
const Nova_Kapela_Modal = '/citave_slike/Nova_Kapela_Modal.jpg';

const Pljevlja = '/geoloske_slike/PLJEVLJA.jpg';
const Pljevlja_Modal = '/citave_slike/Pljevlja_Modal.jpg';

const Praca = '/geoloske_slike/PRACA.jpg';
const Praca_Modal = '/citave_slike/Praca_Modal.jpg';

const Prijedor = '/geoloske_slike/PRIJEDOR.jpg';
const Prijedor_Modal = '/citave_slike/Prijedor_Modal.jpg';

const Prozor = '/geoloske_slike/PROZOR.jpg';
const Prozor_Modal = '/citave_slike/Prozor_Modal.jpg';

const Sarajevo = '/geoloske_slike/SARAJEVO.jpg';
const Sarajevo_Modal = '/citave_slike/Sarajevo_Modal.jpg';

const Slavonski_Brod = '/geoloske_slike/SLAVONSKI_BROD.jpg';
const Slavonski_Brod_Modal = '/citave_slike/Slavonski_Brod_Modal.jpg';

const Slunj = '/geoloske_slike/SLUNJ.jpg';
const Slunj_Modal = '/citave_slike/Slunj_Modal.jpg';

const Ston = '/geoloske_slike/STON.jpg';
const Ston_Modal = '/citave_slike/Ston_Modal.jpg';

const Teslic = '/geoloske_slike/TESLIC.jpg';
const Teslic_Modal = '/citave_slike/Teslic_Modal.jpg';

const Trebinje = '/geoloske_slike/TREBINJE.jpg';
const Trebinje_Modal = '/citave_slike/Trebinje_Modal.jpg';

const Tuzla = '/geoloske_slike/TUZLA.jpg';
const Tuzla_Modal = '/citave_slike/Tuzla_Modal.jpg';

const Udbina = '/geoloske_slike/UDBINA.jpg';
const Udbina_Modal = '/citave_slike/Udbina_Modal.jpg';

const Vares = '/geoloske_slike/VARES.jpg';
const Vares_Modal = '/citave_slike/Vares_Modal.jpg';

const Vinkovci = '/geoloske_slike/VINKOVCI.jpg';
const Vinkovci_Modal = '/citave_slike/Vinkovci_Modal.jpg';

const Visegrad = '/geoloske_slike/VISEGRAD.jpg';
const Visegrad_Modal = '/citave_slike/Visegrad_Modal.jpg';

const Zavidovici = '/geoloske_slike/ZAVIDOVICI.jpg';
const Zavidovici_Modal = '/citave_slike/Zavidovici_Modal.jpg';

const Zenica = '/geoloske_slike/ZENICA.jpg';
const Zenica_Modal = '/citave_slike/Zenica_Modal.jpg';

const Zvornik = '/geoloske_slike/ZVORNIK.jpg';
const Zvornik_Modal = '/citave_slike/Zvornik_Modal.jpg';

// Granice georeferenciranih slika (xmin, ymin, xmax, ymax) u EPSG:4326
const geoloskeKarte = [
  new VectorImageLayer({
    source: new Static({
      url: Banja_Luka,
      imageExtent: [16.9958142549362208, 44.6640011766846285, 17.4980872913325278, 45.0011098137860088],
      projection: 'EPSG:4326',
    }),
    name: "Banja Luka",
    modalUrl: Banja_Luka_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Bihac,
      imageExtent: [15.492583, 44.6673472, 15.9960836, 44.9985715],
      projection: 'EPSG:4326',
    }),
    name: "Bihac",
    modalUrl: Bihac_Modal,

  }),
  new VectorImageLayer({
    source: new Static({
      url: Bijeljina,
      imageExtent: [18.995859, 44.666554, 19.4925745, 44.999556],
      projection: 'EPSG:4326',
    }),
    name: "Bijeljina",
    modalUrl: Bijeljina_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Bosanska_Krupa,
      imageExtent: [15.9961973, 44.6741622, 16.4932697, 44.9915513],
      projection: 'EPSG:4326',
    }),
    name: "Bosanska_Krupa",
    modalUrl: Bosanska_Krupa_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Brcko,
      imageExtent: [18.4953407, 44.6672844, 18.9966323, 44.9994132],
      projection: 'EPSG:4326',
    }),
    name: "Brcko",
    modalUrl: Brcko_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Bugojno,
      imageExtent: [16.9969755, 44.0000562, 17.4947858, 44.3333159],
      projection: 'EPSG:4326',
    }),
    name: "Bugojno",
    modalUrl: Bugojno_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Derventa,
      imageExtent: [17.4934887, 44.6688151, 17.9966491, 45.0001578],
      projection: 'EPSG:4326',
    }),
    name: "Derventa",
    modalUrl: Derventa_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Doboj,
      imageExtent: [17.9938444, 44.6666748, 18.496823, 45.000437],
      projection: 'EPSG:4326',
    }),
    name: "Doboj",
    modalUrl: Doboj_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Drvar,
      imageExtent: [15.9970655, 44.3342644, 16.4952934, 44.6657714],
      projection: 'EPSG:4326',
    }),
    name: "Drvar",
    modalUrl: Drvar_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Foca,
      imageExtent: [18.4952561, 43.3337788, 18.9950364, 43.665628],
      projection: 'EPSG:4326',
    }),
    name: "Foca",
    modalUrl: Foca_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Gacko,
      imageExtent: [18.4993527, 42.998782, 18.9905148, 43.3332701],
      projection: 'EPSG:4326',
    }),
    name: "Gacko",
    modalUrl: Gacko_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Glamoc,
      imageExtent: [16.4945131, 44.0017441, 16.9919774, 44.3317309],
      projection: 'EPSG:4326',
    }),
    name: "Glamoc",
    modalUrl: Glamoc_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Imotski,
      imageExtent: [16.9970857, 43.3336561, 17.4976407, 43.665269],
      projection: 'EPSG:4326',
    }),
    name: "Imotski",
    modalUrl: Imotski_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Jajce,
      imageExtent: [16.9973323, 44.3327853, 17.4941826, 44.6679349],
      projection: 'EPSG:4326',
    }),
    name: "Jajce",
    modalUrl: Jajce_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Kalinovik,
      imageExtent: [17.9948944, 43.3338654, 18.4958784, 43.665828],
      projection: 'EPSG:4326',
    }),
    name: "Kalinovik",
    modalUrl: Kalinovik_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Kljuc,
      imageExtent: [16.4959681, 44.3345183, 16.9925271, 44.665886],
      projection: 'EPSG:4326',
    }),
    name: "Kljuc",
    modalUrl: Kljuc_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Kostajnica,
      imageExtent: [16.495874, 45.0016915, 16.9950819, 45.3322116],
      projection: 'EPSG:4326',
    }),
    name: "Kostajnica",
    modalUrl: Kostajnica_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Livno,
      imageExtent: [16.9955832, 43.6652724, 17.5021356, 43.9996059],
      projection: 'EPSG:4326',
    }),
    name: "Livno",
    modalUrl: Livno_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Ljubovija,
      imageExtent: [18.9980053, 44.0007225, 19.4954285, 44.3309193],
      projection: 'EPSG:4326',
    }),
    name: "Ljubovija",
    modalUrl: Ljubovija_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Metkovic,
      imageExtent: [17.4926099, 43.0022942, 17.9946378, 43.3314037],
      projection: 'EPSG:4326',
    }),
    name: "Metkovic",
    modalUrl: Metkovic_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Mostar,
      imageExtent: [17.4955819, 43.3343349, 17.9986615, 43.6674412],
      projection: 'EPSG:4326',
    }),
    name: "Mostar",
    modalUrl: Mostar_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Nova_Gradiska,
      imageExtent: [16.9942752, 45.0004776, 17.4922101, 45.3329182],
      projection: 'EPSG:4326',
    }),
    name: "Nova_Gradiska",
    modalUrl: Nova_Gradiska_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Nova_Kapela,
      imageExtent: [17.4969904, 44.9992185, 17.9934879, 45.3324188],
      projection: 'EPSG:4326',
    }),
    name: "Nova_Kapela",
    modalUrl: Nova_Kapela_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Pljevlja,
      imageExtent: [18.9954321, 43.3381076, 19.4897386, 43.6641501],
      projection: 'EPSG:4326',
    }),
    name: "Pljevlja",
    modalUrl: Pljevlja_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Praca,
      imageExtent: [18.4934354, 43.6668276, 18.9970529, 44.0016312],
      projection: 'EPSG:4326',
    }),
    name: "Praca",
    modalUrl: Praca_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Prijedor,
      imageExtent: [16.4985683, 44.6665182, 16.9922857, 44.9982197],
      projection: 'EPSG:4326',
    }),
    name: "Prijedor",
    modalUrl: Prijedor_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Prozor,
      imageExtent: [17.4957806, 43.6653962, 17.9957225, 44.0001177],
      projection: 'EPSG:4326',
    }),
    name: "Prozor",
    modalUrl: Prozor_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Sarajevo,
      imageExtent: [17.989466, 43.6339546, 18.5026791, 44.0206792],
      projection: 'EPSG:4326',
    }),
    name: "Sarajevo",
    modalUrl: Sarajevo_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Slavonski_Brod,
      imageExtent: [17.9950968, 44.9990251, 18.4977869, 45.3327788],
      projection: 'EPSG:4326',
    }),
    name: "Slavonski_Brod",
    modalUrl: Slavonski_Brod_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Slunj,
      imageExtent: [15.4949878, 45.002421, 16.0008263, 45.3273245],
      projection: 'EPSG:4326',
    }),
    name: "Slunj",
    modalUrl: Slunj_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Ston,
      imageExtent: [17.4931973, 42.6678339, 17.9968414, 42.9986499],
      projection: 'EPSG:4326',
    }),
    name: "Ston",
    modalUrl: Ston_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Teslic,
      imageExtent: [17.4960714, 44.3332104, 17.9929316, 44.6687566],
      projection: 'EPSG:4326',
    }),
    name: "Teslic",
    modalUrl: Teslic_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Trebinje,
      imageExtent: [17.9929098, 42.6685431, 18.4968065, 42.998347],
      projection: 'EPSG:4326',
    }),
    name: "Trebinje",
    modalUrl: Trebinje_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Tuzla,
      imageExtent: [18.4944165, 44.3328186, 18.9949447, 44.6669643],
      projection: 'EPSG:4326',
    }),
    name: "Tuzla",
    modalUrl: Tuzla_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Udbina,
      imageExtent: [15.4938247, 44.3014133, 16.0041024, 44.6840411],
      projection: 'EPSG:4326',
    }),
    name: "Udbina",
    modalUrl: Udbina_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Vares,
      imageExtent: [17.9976667, 43.9967826, 18.494843, 44.3401974],
      projection: 'EPSG:4326',
    }),
    name: "Vares",
    modalUrl: Vares_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Vinkovci,
      imageExtent: [18.4976217, 45.0002738, 18.9907586, 45.3371929],
      projection: 'EPSG:4326',
    }),
    name: "Vinkovci",
    modalUrl: Vinkovci_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Visegrad,
      imageExtent: [18.9999842, 43.6650292, 19.4923464, 43.9998773],
      projection: 'EPSG:4326',
    }),
    name: "Visegrad",
    modalUrl: Visegrad_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Zavidovici,
      imageExtent: [17.997867, 44.3338244, 18.4919998, 44.6652856],
      projection: 'EPSG:4326',
    }),
    name: "Zavidovici",
    modalUrl: Zavidovici_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Zenica,
      imageExtent: [17.4969476, 44.0003322, 17.9969768, 44.3316336],
      projection: 'EPSG:4326',
    }),
    name: "Zenica",
    modalUrl: Zenica_Modal,
  }),
  new VectorImageLayer({
    source: new Static({
      url: Zvornik,
      imageExtent: [18.9980606, 44.3329315, 19.4911878, 44.6663943],
      projection: 'EPSG:4326',
    }),
    name: "Zvornik",
    modalUrl: Zvornik_Modal,
  }),
];

export default geoloskeKarte;

