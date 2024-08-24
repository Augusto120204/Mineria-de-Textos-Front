import { Dialogo } from './Dialogo.jsx';
import { useEffect, useState } from 'react';
import logo from '../img/logo.png';

const itemsEjemplo = [
    {
        "entities": "(S\n  I/PRP\n  have/VBP\n  bought/VBN\n  several/JJ\n  of/IN\n  the/DT\n  (ORGANIZATION Vitality/NNP)\n  canned/VBD\n  dog/RP\n  food/NN\n  products/NNS\n  and/CC\n  have/VBP\n  found/VBN\n  them/PRP\n  all/DT\n  to/TO\n  be/VB\n  of/IN\n  good/JJ\n  quality/NN\n  ./.\n  The/DT\n  product/NN\n  looks/VBZ\n  more/RBR\n  like/IN\n  a/DT\n  stew/NN\n  than/IN\n  a/DT\n  processed/JJ\n  meat/NN\n  and/CC\n  it/PRP\n  smells/VBZ\n  better/RBR\n  ./.\n  My/PRP$\n  (ORGANIZATION Labrador/NNP)\n  is/VBZ\n  finicky/JJ\n  and/CC\n  she/PRP\n  appreciates/VBZ\n  this/DT\n  product/NN\n  better/JJR\n  than/IN\n  most/JJS\n  ./.)",
        "original": "I have bought several of the Vitality canned dog food products and have found them all to be of good quality. The product looks more like a stew than a processed meat and it smells better. My Labrador is finicky and she appreciates this product better than  most.",
        "sentiment": {
            "compound": 0.9441,
            "neg": 0.0,
            "neu": 0.695,
            "pos": 0.305
        },
        "summary": " The product looks more like a stew than a processed meat and it smells better . My Labrador is finicky and she appreciates this product better than most ."
    },
    {
        "entities": "(S\n  (GPE Product/NNP)\n  arrived/VBD\n  labeled/VBN\n  as/IN\n  (PERSON Jumbo/NNP Salted/NNP Peanuts/NNP)\n  .../:\n  the/DT\n  peanuts/NNS\n  were/VBD\n  actually/RB\n  small/JJ\n  sized/VBN\n  unsalted/JJ\n  ./.\n  Not/RB\n  sure/JJ\n  if/IN\n  this/DT\n  was/VBD\n  an/DT\n  error/NN\n  or/CC\n  if/IN\n  the/DT\n  vendor/NN\n  intended/VBN\n  to/TO\n  represent/VB\n  the/DT\n  product/NN\n  as/IN\n  `/`\n  Jumbo/NNP\n  ''/''\n  ./.)",
        "original": "Product arrived labeled as Jumbo Salted Peanuts...the peanuts were actually small sized unsalted. Not sure if this was an error or if the vendor intended to represent the product as \"Jumbo\".",
        "sentiment": {
            "compound": -0.5664,
            "neg": 0.138,
            "neu": 0.862,
            "pos": 0.0
        },
        "summary": " Product arrived labeled as Jumbo Salted Peanuts...the peanuts were actually small sized unsalted . Not sure if this was an error or if the vendor intended to represent the product as \"Jumbo\"."
    },
    {
        "entities": "(S\n  This/DT\n  is/VBZ\n  a/DT\n  confection/NN\n  that/WDT\n  has/VBZ\n  been/VBN\n  around/IN\n  a/DT\n  few/JJ\n  centuries/NNS\n  ./.\n  It/PRP\n  is/VBZ\n  a/DT\n  light/JJ\n  ,/,\n  pillowy/JJ\n  citrus/NN\n  gelatin/NN\n  with/IN\n  nuts/NNS\n  -/:\n  in/IN\n  this/DT\n  case/NN\n  Filberts/NNP\n  ./.\n  And/CC\n  it/PRP\n  is/VBZ\n  cut/VBN\n  into/IN\n  tiny/JJ\n  squares/NNS\n  and/CC\n  then/RB\n  liberally/RB\n  coated/VBN\n  with/IN\n  powdered/JJ\n  sugar/NN\n  ./.\n  And/CC\n  it/PRP\n  is/VBZ\n  a/DT\n  tiny/JJ\n  mouthful/NN\n  of/IN\n  heaven/NN\n  ./.\n  Not/RB\n  too/RB\n  chewy/JJ\n  ,/,\n  and/CC\n  very/RB\n  flavorful/JJ\n  ./.\n  I/PRP\n  highly/RB\n  recommend/VBP\n  this/DT\n  yummy/JJ\n  treat/NN\n  ./.\n  If/IN\n  you/PRP\n  are/VBP\n  familiar/JJ\n  with/IN\n  the/DT\n  story/NN\n  of/IN\n  C.S/NNP\n  ./.\n  (PERSON Lewis/NNP)\n  '/POS\n  `/`\n  The/DT\n  (ORGANIZATION Lion/NNP)\n  ,/,\n  The/DT\n  (GPE Witch/NNP)\n  ,/,\n  and/CC\n  The/DT\n  (ORGANIZATION Wardrobe/NNP)\n  ''/''\n  -/:\n  this/DT\n  is/VBZ\n  the/DT\n  treat/NN\n  that/WDT\n  seduces/VBZ\n  (PERSON Edmund/NNP)\n  into/IN\n  selling/VBG\n  out/RP\n  his/PRP$\n  (PERSON Brother/NN)\n  and/CC\n  (ORGANIZATION Sisters/NNP)\n  to/TO\n  the/DT\n  (GPE Witch/NNP)\n  ./.)",
        "original": "This is a confection that has been around a few centuries.  It is a light, pillowy citrus gelatin with nuts - in this case Filberts. And it is cut into tiny squares and then liberally coated with powdered sugar.  And it is a tiny mouthful of heaven.  Not too chewy, and very flavorful.  I highly recommend this yummy treat.  If you are familiar with the story of C.S. Lewis' \"The Lion, The Witch, and The Wardrobe\" - this is the treat that seduces Edmund into selling out his Brother and Sisters to the Witch.",
        "sentiment": {
            "compound": 0.8265,
            "neg": 0.091,
            "neu": 0.754,
            "pos": 0.155
        },
        "summary": " This is a light, pillowy citrus gelatin with nuts - in the case Filberts . It is cut into tiny squares and then liberally coated with powdered sugar . Not too chewy, and very flavorful ."
    },
    {
        "entities": "(S\n  If/IN\n  you/PRP\n  are/VBP\n  looking/VBG\n  for/IN\n  the/DT\n  secret/JJ\n  ingredient/NN\n  in/IN\n  Robitussin/NNP\n  I/PRP\n  believe/VBP\n  I/PRP\n  have/VBP\n  found/VBN\n  it/PRP\n  ./.\n  I/PRP\n  got/VBD\n  this/DT\n  in/IN\n  addition/NN\n  to/TO\n  the/DT\n  (ORGANIZATION Root/NNP Beer/NNP)\n  Extract/NNP\n  I/PRP\n  ordered/VBD\n  (/(\n  which/WDT\n  was/VBD\n  good/JJ\n  )/)\n  and/CC\n  made/VBD\n  some/DT\n  cherry/JJ\n  soda/NN\n  ./.\n  The/DT\n  flavor/NN\n  is/VBZ\n  very/RB\n  medicinal/JJ\n  ./.)",
        "original": "If you are looking for the secret ingredient in Robitussin I believe I have found it.  I got this in addition to the Root Beer Extract I ordered (which was good) and made some cherry soda.  The flavor is very medicinal.",
        "sentiment": {
            "compound": 0.0,
            "neg": 0.0,
            "neu": 1.0,
            "pos": 0.0
        },
        "summary": " If you are looking for the secret ingredient in Robitussin I believe I have found it . I got this in addition to the Root Beer Extract I ordered (which was good) and made some cherry soda . The flavor is very medicinal ."
    },
    {
        "entities": "(S\n  (GPE Great/NNP)\n  taffy/NN\n  at/IN\n  a/DT\n  great/JJ\n  price/NN\n  ./.\n  There/EX\n  was/VBD\n  a/DT\n  wide/JJ\n  assortment/NN\n  of/IN\n  yummy/NN\n  taffy/NN\n  ./.\n  (PERSON Delivery/NNP)\n  was/VBD\n  very/RB\n  quick/JJ\n  ./.\n  If/IN\n  your/PRP$\n  a/DT\n  taffy/NN\n  lover/NN\n  ,/,\n  this/DT\n  is/VBZ\n  a/DT\n  deal/NN\n  ./.)",
        "original": "Great taffy at a great price.  There was a wide assortment of yummy taffy.  Delivery was very quick.  If your a taffy lover, this is a deal.",
        "sentiment": {
            "compound": 0.9468,
            "neg": 0.0,
            "neu": 0.552,
            "pos": 0.448
        },
        "summary": " Great taffy at a great price . Delivery was very quick and delivery was quick . There was a wide assortment of yummy taffies . If your a taffie lover, this is a deal ."
    }
]

export function Chat() {
    const [indiceSeleccionado, setIndiceSeleccionado] = useState(0);
    const [items, setItems] = useState(itemsEjemplo);
    const [item, setItem] = useState(items[0]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/analyze')
                .then(response => response.json())
                .then(data => {setItems(data); setItem(data[0])})
                .catch(error => console.error('Error:', error));
    }, [])

    const handleClick = (i) => {
        setItem(items[i]);
        setIndiceSeleccionado(i);
    }

    return (
        <div className='flex w-full h-screen bg-gray-900'>
            <div className='flex flex-col h-full'>
                <img src={logo} alt="logo" className='w-20 invert mx-auto my-3' />
                {
                    items.map((i, index) => (
                        <button key={index} onClick={() => handleClick(index)}
                            className={`text-white py-3 px-10 hover:bg-gray-800 rounded-s-lg ml-1
                            ${index == indiceSeleccionado ? 'bg-gray-800 text-blue-400 font-bold': ''}`}>
                            Texto {index + 1}
                        </button>
                    ))
                }
            </div>
            <div className='flex-1'>
                <Dialogo item={item} />
            </div>
        </div>
    );
}
