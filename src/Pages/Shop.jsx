import { Link } from "react-router-dom"
import Footer from "../Components/Footer"
import { useState } from "react"
import minus from '/assets/images/minus.svg'
import plus from '/assets/images/plus.svg'

export default function Shop() {

    const [openFilterBox, setOpenFilterBox] = useState(false);
    const [filterGender, setFilterGender] = useState('man');
    const [pageOrder, setPageOrder] = useState(1);
    const [openFilter1, setOpenFilter1] = useState(false);
    const [openFilter2, setOpenFilter2] = useState(false);
    const [openFilter3, setOpenFilter3] = useState(false);
    const [openFilter4, setOpenFilter4] = useState(false);
    const [openFilter5, setOpenFilter5] = useState(false);
    const [openFilter6, setOpenFilter6] = useState(false);

    const products = [
        {
            id: '01',
            name: 'Kısa Kollu Gömlek Cep Detaylı Pamuklu',
            price: '899,00',
            color: '#D9D3C3',
            image01: 'https://ktnimg2.mncdn.com/products/2024/07/22/2956781/727a3f70-c606-499c-ad44-4948e23c3171_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/07/22/2956781/1041c640-4949-43bb-93e9-662c8e546162_size870x1142.jpg',
            gender: 'man'
        },
        {
            id: '02',
            name: 'Oversize Gömlek Kısa Kollu Dokulu',
            price: '779,00',
            color: '#C8B6A8',
            image01: 'https://ktnimg2.mncdn.com/products/2024/07/04/2946512/6854d540-652d-4209-86e3-ed991cb7f4c3_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/07/04/2946512/40b22c1a-c170-4785-b2ec-d19b815a0db1_size870x1142.jpg',
            gender: 'man'
        },
        {
            id: '03',
            name: 'Keten Gömlek Klasik Yaka Uzun Kollu Düğmeli',
            price: '1099,00',
            color: '#017FDF',
            image01: 'https://ktnimg2.mncdn.com/products/2024/05/29/2928684/784d1062-a765-4fda-8b26-4b68f58f1939_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/05/29/2928684/32dc93b6-7f95-48b2-81c2-5895af50fdb2_size870x1142.jpg',
            gender: 'man'
        },
        {
            id: '04',
            name: 'Kısa Kollu Gömlek Desenli Düğmeli Devrik Yaka',
            price: '899,00',
            color: '#2E2531',
            image01: 'https://ktnimg2.mncdn.com/products/2024/07/08/2949455/8a44a2ee-c25d-4e7d-96df-ff482aa642c5_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/07/08/2949455/e751dfde-ec44-42ae-9721-ffa8e5cb02da_size870x1142.jpg',
            gender: 'man'
        },
        {
            id: '05',
            name: 'Ajurlu Gömlek Kısa Kollu Devrik Yaka Örgü Dokulu',
            price: '849,00',
            color: '#CBCAC3',
            image01: 'https://ktnimg2.mncdn.com/products/2024/05/24/2886169/81f38f95-dca6-41a9-af86-9fd81cc69c4b_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/05/24/2886169/d997c9c2-eb24-40e0-9b8d-3ddfa6ed6091_size870x1142.jpg',
            gender: 'man'
        },
        {
            id: '06',
            name: 'Kısa Kollu Gömlek Cep Detaylı Düğmeli Klasik Yaka',
            price: '799,00',
            color: '#B9B6A2',
            image01: 'https://ktnimg2.mncdn.com/products/2024/06/05/2931925/e435d879-2246-4a6d-b4f9-bed49f921e5c_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/06/05/2931925/5d5463d1-afea-4894-b7c9-123cf3232b69_size870x1142.jpg',
            gender: 'man'
        },
        {
            id: '07',
            name: 'Hawaii Gömlek Kısa Kollu Desenli Düğmeli Yaka Detaylı Pamuklu',
            price: '799,00',
            color: '#D8D8D8',
            image01: 'https://ktnimg2.mncdn.com/products/2024/05/10/2915901/acb7ae2f-538f-44cd-a066-e99a642ef979_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/05/10/2915901/51b32d88-8251-4c36-a609-b0c561412797_size870x1142.jpg',
            gender: 'man'
        },
        {
            id: '08',
            name: 'Uzun Kollu Gömlek Düğmeli Keten Karışımlı',
            price: '849,00',
            color: '#929882',
            image01: 'https://ktnimg2.mncdn.com/products/2024/05/23/2920519/f6e6337a-63c4-44e4-8ddd-bb18803b296f_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/05/23/2920519/6de33a9f-188f-4ed4-bd01-307eea5d5f19_size870x1142.jpg',
            gender: 'man'
        },
        {
            id: '09',
            name: 'Nakışlı Crop Gömlek Kısa Kollu Pamuklu',
            price: '899,00',
            color: '#EDEBE7',
            image01: 'https://ktnimg2.mncdn.com/products/2024/07/09/2949740/71bae01b-042c-4e3c-8cd7-a03034c8d6f6_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/07/09/2949740/6caafa99-3a01-4261-83e5-8e211ed8e217_size870x1142.jpg',
            gender: 'woman'
        },
        {
            id: '10',
            name: 'Uzun Plaj Elbisesi Oversize Batik Desenli V Yaya Viskoz Kumaş',
            price: '999,00',
            color: '#FC8DC2',
            image01: 'https://ktnimg2.mncdn.com/products/2024/03/04/2891878/2346344e-94a9-412f-b7dd-a35f76fcc155_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/03/04/2891878/56825a93-8f43-4bdf-b764-7efa488811a4_size870x1142.jpg',
            gender: 'woman'
        },
        {
            id: '11',
            name: 'Koton X Tuba Ünsal - Kısa Kollu Kiraz Baskılı Tişört',
            price: '449,00',
            color: '#F5F5F2',
            image01: 'https://ktnimg2.mncdn.com/products/2024/05/28/2906711/a087e539-cdb0-4768-92a6-6fe44c39f0ca_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/05/28/2906711/8967272f-4b9f-402f-b8d5-af4164c87696_size870x1142.jpg',
            gender: 'woman'
        },
        {
            id: '12',
            name: 'Koton X Sibil Çetinkaya - Kiraz Desenli Mini Viskon Elbise İnce Askılı Kalp Yaka Fiyonk Detaylı',
            price: '999,00',
            color: '#E2D8D5',
            image01: 'https://ktnimg2.mncdn.com/products/2024/05/22/2923406/9342e01e-bac2-4ec9-aebf-5bcaa7642244_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/05/22/2923406/af2dc7d9-4cbf-453d-898e-d4b58ac4bb82_size870x1142.jpg',
            gender: 'woman'
        },
        {
            id: '13',
            name: 'Koton X Tuba Ünsal - Kiraz Baskı Detaylı Crop Tişört Kısa Kollu Bisiklet Yaka Pamuklu',
            price: '349,00',
            color: '#E2D8D5',
            image01: 'https://ktnimg2.mncdn.com/products/2024/05/27/2927462/35d92e32-ecff-41c1-867d-889c0433daa6_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/05/27/2927462/5feac343-1c7b-4d58-8588-b17065e3764e_size870x1142.jpg',
            gender: 'woman'
        },
        {
            id: '14',
            name: 'Kiraz Baskılı Tişört Kısa Kollu Bisiklet Yaka Rahat Kalıp Pamuklu',
            price: '249,00',
            color: '#DADBD6',
            image01: 'https://ktnimg2.mncdn.com/products/2024/04/17/2907803/4e086e9d-5b12-40f8-a48c-14b8b498554f_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/04/17/2907803/4271ca04-3419-442b-b3fb-a6b8f8a5de76_size870x1142.jpg',
            gender: 'woman'
        },
        {
            id: '15',
            name: 'Koton X Tuba Ünsal - Çilek Baskılı Tişört Kısa Kollu Bisiklet Yaka Pamuklu Regular Fit',
            price: '449,00',
            color: '#1C2024',
            image01: 'https://ktnimg2.mncdn.com/products/2024/05/24/2926941/9513a572-ef2b-4571-bd1a-d2163118f3bb_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/05/24/2926941/6271c03b-b365-42ef-a880-80a645785969_size870x1142.jpg',
            gender: 'woman'
        },
        {
            id: '16',
            name: 'Koton X Sibil Çetinkaya - Meyve Desenli Cep Detaylı Crop Gömlek',
            price: '699,00',
            color: '#D8D9D1',
            image01: 'https://ktnimg2.mncdn.com/products/2024/05/23/2921262/18d61e46-d57c-40db-a472-9dee4cefb3c5_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/05/23/2921262/abe9c730-ad7c-45c6-838c-9c5b662de8aa_size870x1142.jpg',
            gender: 'woman'
        },
        {
            id: '17',
            name: 'Meyve Baskılı Tişört Relax Fit Bisiklet Yaka Kısa Kollu',
            price: '199,00',
            color: '#D8DADC',
            image01: 'https://ktnimg2.mncdn.com/products/2024/05/13/2919567/20c0cdfa-c840-4632-90dc-7064ff4e1e23_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/05/13/2919567/b7b85ccd-d118-44a2-8869-5e2874ee1559_size870x1142.jpg',
            gender: 'woman'
        },
        {
            id: '18',
            name: 'Şortlu Pijama Takımı Çilek Baskılı Kısa Kollu Bisiklet Yaka Viskon',
            price: '799,00',
            color: '#EFCECF',
            image01: 'https://ktnimg2.mncdn.com/products/2024/01/23/2872429/3cc832b8-3e30-48f4-a6eb-7e680613c3b8_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/01/23/2872429/d7478543-a939-417b-b3cf-66114c41edb8_size870x1142.jpg',
            gender: 'woman'
        },
        {
            id: '19',
            name: 'Koton X Tuba Ünsal - Çilek Baskılı Crop Atlet Asimetrik Kesim Slim Fit',
            price: '299,00',
            color: '#EBEDEC',
            image01: 'https://ktnimg2.mncdn.com/products/2024/05/29/2928289/59f8b882-c1f1-4c2f-a1fa-f12907d68f74_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/05/29/2928289/7971178d-34a1-4f0c-92d9-934ec04aff59_size870x1142.jpg',
            gender: 'woman'
        },
        {
            id: '20',
            name: 'Erkek Çocuk Mickey Mouse Tişört Lisanslı Kısa Kollu Bisiklet Yaka Pamuklu',
            price: '399,00',
            color: '#F2EEEB',
            image01: 'https://ktnimg2.mncdn.com/products/2024/05/09/2878832/a9ec26b4-9080-4ace-a195-e2360726a4f5_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/05/09/2878832/d65f8656-412f-4893-9cd4-22a57bfb9c6e_size870x1142.jpg',
            gender: 'child'
        },
        {
            id: '21',
            name: 'Kız Çocuk Crop Tişört Kısa Kollu Bisiklet Yaka Baskılı Biyeli',
            price: '299,00',
            color: '#CEE4F1',
            image01: 'https://ktnimg2.mncdn.com/products/2024/05/09/2910710/7a68e308-1a0a-4481-ad20-a495f9ec3a1e_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/05/09/2910070/ebbe326e-5404-4ff0-a786-8e156fa6f2a9_size870x1142.jpg',
            gender: 'child'
        },
        {
            id: '22',
            name: 'Erkek Çocuk Oversize Atlet Spor Temalı Türkiye Baskılı Bisiklet Yaka Renk Bloklu',
            price: '199,00',
            color: '#E72D33',
            image01: 'https://ktnimg2.mncdn.com/products/2024/05/09/2917706/12607212-eacc-4988-a05f-272dc0acba88_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/05/09/2917706/d57a7707-8b25-4459-9a7c-1a1683d44d23_size870x1142.jpg',
            gender: 'child'
        },
        {
            id: '23',
            name: 'Kız Çocuk Keten Elbise Çiçekli Balon Kollu Yuvarlak Yaka',
            price: '599,00',
            color: '#CFD1C7',
            image01: 'https://ktnimg2.mncdn.com/products/2024/05/02/2903561/9a94db7f-b4f1-4f44-b53e-2aded5dd4acf_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/05/02/2903561/d18c1e2e-78dc-4bb3-b0fa-34f5f27d8f3d_size870x1142.jpg',
            gender: 'child'
        },
        {
            id: '24',
            name: 'Kız Çocuk Crop Tişört Polo Yaka Kısa Kollu Spor Temalı Pamuklu',
            price: '399,00',
            color: '#0495EA',
            image01: 'https://ktnimg2.mncdn.com/products/2024/05/28/2908638/4ae71610-8710-4316-ba61-33cc7bef7e4a_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/05/28/2908638/a3f2b660-24f0-494a-9159-68b6a4ee4a95_size870x1142.jpg',
            gender: 'child'
        },
        {
            id: '25',
            name: 'Spor Tişört Slogan Baskılı Kısa Kollu Bisiklet Yaka',
            price: '299,00',
            color: '#1A294B',
            image01: 'https://ktnimg2.mncdn.com/products/2024/06/08/2934198/24a08206-8e83-4fd3-94f1-b16ee255848a_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/06/08/2934198/2b5c491d-d926-4610-894b-9d4abfee3f2c_size870x1142.jpg',
            gender: 'man'
        },
        {
            id: '26',
            name: 'Spor Atlet Slogan Baskılı Kolsuz Kapşonlu',
            price: '399,00',
            color: '#6AC6AA',
            image01: 'https://ktnimg2.mncdn.com/products/2024/06/25/2940191/94c135a2-517f-44c0-8db2-042642bab4e4_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/06/25/2940191/d65a29a5-ffe3-40f3-89e3-a99aa59c831e_size870x1142.jpg',
            gender: 'man'
        },
        {
            id: '27',
            name: 'Oversize Spor Tişört Kolej Baskılı Bisiklet Yaka Kısa Kollu',
            price: '449,00',
            color: '#02625F',
            image01: 'https://ktnimg2.mncdn.com/products/2024/01/16/2868625/ae0c0538-51a1-4a8c-b874-ab041c0b2740_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/01/16/2868619/9556462f-378b-4e02-b8ae-d677a891b5fa_size870x1142.jpg',
            gender: 'man'
        },
        {
            id: '28',
            name: 'Sporcu Atleti Kolsuz Slogan Baskılı Bisiklet Yaka',
            price: '249,00',
            color: '#1F1F21',
            image01: 'https://ktnimg2.mncdn.com/products/2024/02/09/2880895/4728e905-a99e-4d25-9a50-c42f9bcab01b_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/02/09/2880895/da22a692-85af-44c0-9e6f-1eaee4611c99_size870x1142.jpg',
            gender: 'man'
        },
        {
            id: '29',
            name: 'Spor Tişört Slogan Baskılı Bisiklet Yaka Kısa Kollu',
            price: '349,00',
            color: '#ECEEF2',
            image01: 'https://ktnimg2.mncdn.com/products/2024/03/18/2896039/f46baf5d-f0a0-4377-b519-14fa8d2cf2c9_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/03/18/2896039/9dbc41fc-5d79-429f-9c55-3cef5d7c1c04_size870x1142.jpg',
            gender: 'man'
        },
        {
            id: '30',
            name: 'Kız Çocuk Fiyonklu Elbise Askılı Kare Yaka Balon Etek',
            price: '899,00',
            color: '#ED5B88',
            image01: 'https://ktnimg2.mncdn.com/products/2024/05/02/2913974/b56240c9-cdd3-43c9-844d-9f93b63ed88b_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/05/02/2913974/03211c8c-1f61-4497-9fd9-9ddf5cd28eed_size870x1142.jpg',
            gender: 'child'
        },
        {
            id: '31',
            name: 'Kız Çocuk Fistolu Etek Beli Lastikli Fırfır Detaylı',
            price: '599,00',
            color: '#EED4CD',
            image01: 'https://ktnimg2.mncdn.com/products/2024/06/28/2914817/606494e9-e0df-46a9-a629-07d0ff1b7040_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/06/28/2914817/4b643474-f8a0-4f37-9149-67dfac312699_size870x1142.jpg',
            gender: 'child'
        },
        {
            id: '32',
            name: 'Kız Çocuk Crop Bluz Askılı Fistolu Büzgü Detaylı Fırfırlı',
            price: '359,00',
            color: '#D9E8D3',
            image01: 'https://ktnimg2.mncdn.com/products/2024/06/28/2929891/0ff8113f-63be-48e4-8bb8-2adafbaee0f7_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/06/28/2929891/446138ad-675b-4c8e-a16e-94e71af9a436_size870x1142.jpg',
            gender: 'child'
        },
        {
            id: '33',
            name: 'Kız Çocuk Tweety Şort Beli Lastikli Biye Detaylı',
            price: '379,00',
            color: '#EAEBEF',
            image01: 'https://ktnimg2.mncdn.com/products/2024/05/23/2905003/6b4c55c0-1b9d-4505-9f88-4ea330e375ae_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/05/23/2904999/6ae5db10-df1f-4fcc-85c6-04ac19f297b1_size870x1142.jpg',
            gender: 'child'
        },
        {
            id: '34',
            name: 'Erkek Çocuk Basic Polo Yaka Tişört Kısa Kollu Tek Cepli',
            price: '399,00',
            color: '#F3F1ED',
            image01: 'https://ktnimg2.mncdn.com/products/2024/07/01/2917470/fb985e3d-3268-450b-9346-948497671708_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/07/01/2917470/8b3fa77a-abe4-4c6c-9850-4baa38335daa_size870x1142.jpg',
            gender: 'child'
        },
        {
            id: '35',
            name: 'Erkek Çocuk Polo Yaka Tişört Ajurlu Kısa Kollu Düğmeli Tek Cepli Pamuklu',
            price: '699,00',
            color: '#E6E3D8',
            image01: 'https://ktnimg2.mncdn.com/products/2024/06/28/2920185/b7db5e49-c992-4698-9009-01dfb370682f_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/06/28/2920185/90a759fa-1770-4c5e-bb9b-0eba2475b59e_size870x1142.jpg',
            gender: 'child'
        },
        {
            id: '36',
            name: 'Erkek Çocuk Mickey Mouse Baskılı Lisanslı Atlet Pamuklu',
            price: '299,00',
            color: '#EEF1F0',
            image01: 'https://ktnimg2.mncdn.com/products/2024/04/04/2903540/3dfda1a3-2628-4c8c-bc8d-8de9fbe3500a_size870x1142.jpg',
            image02: 'https://ktnimg2.mncdn.com/products/2024/04/04/2903540/6ddf642f-fe83-41e6-a191-00a3c3d56468_size870x1142.jpg',
            gender: 'child'
        },
        
    ]

    function handleSelectGender(e) {
        setFilterGender(e.target.value)
        setPageOrder(1);
    }

    return (
        <>
        <div className="shop-page">

            {
                openFilterBox && <div className="mobile-filter">
                <header>
                    <h1>Filtrele</h1>
                    <button onClick={() => (setOpenFilterBox(false))}><i className="fa-solid fa-xmark"></i></button>
                </header>
                <main>
                    <div className="filter-item">
                        <button onClick={() => (setOpenFilter1(!openFilter1))}>
                            <h3>Koleksiyon</h3>
                            {openFilter1 ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
                        </button>
                        <main style={openFilter1 ? {display: 'flex'} : {}}>
                            <p><input type="checkbox" name="" id="" /> Hafif ve Rahat</p>
                            <p><input type="checkbox" name="" id="" /> Klasik Dokunuşlar</p>
                            <p><input type="checkbox" name="" id="" /> Sade ve Şık</p>
                            <p><input type="checkbox" name="" id="" /> Retro Esintiler</p>
                            <p><input type="checkbox" name="" id="" /> Sokak Modası</p>
                            <p><input type="checkbox" name="" id="" /> Renkli Rüyalar</p>
                        </main>
                    </div>
                    <div className="filter-item">
                        <button onClick={() => (setOpenFilter2(!openFilter2))}>
                            <h3>Fiyat Aralığı</h3>
                            {openFilter2 ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
                        </button>
                        <main style={openFilter2 ? {display: 'flex'} : {}}>
                            <p><input type="checkbox" name="" id="" /> 0 - 250 TL</p>
                            <p><input type="checkbox" name="" id="" /> 251 TL - 500 TL</p>
                            <p><input type="checkbox" name="" id="" /> 501 TL - 750 TL</p>
                            <p><input type="checkbox" name="" id="" /> 751 TL - 1000 TL</p>
                            <p><input type="checkbox" name="" id="" /> 1001 TL - 1500 TL</p>
                            <p><input type="checkbox" name="" id="" /> 1501 TL - 2000 TL</p>
                            <p><input type="checkbox" name="" id="" /> 2001 TL ve üzeri</p>
                        </main>
                    </div>
                    <div className="filter-item">
                        <button onClick={() => (setOpenFilter3(!openFilter3))}>
                            <h3>Değerlendirme</h3>
                            {openFilter3 ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
                        </button>
                        <main style={openFilter3 ? {display: 'flex'} : {}}>
                            <p><input type="checkbox" name="" id="" /> <i className="fa-solid fa-star"></i> <i className="fa-regular fa-star"></i> <i className="fa-regular fa-star"></i> <i className="fa-regular fa-star"></i> <i className="fa-regular fa-star"></i></p>
                            <p><input type="checkbox" name="" id="" /> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-regular fa-star"></i> <i className="fa-regular fa-star"></i> <i className="fa-regular fa-star"></i></p>
                            <p><input type="checkbox" name="" id="" /> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-regular fa-star"></i> <i className="fa-regular fa-star"></i></p>
                            <p><input type="checkbox" name="" id="" /> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-regular fa-star"></i></p>
                            <p><input type="checkbox" name="" id="" /> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i></p>

                        </main>
                    </div>
                    <div className="filter-item">
                        <button onClick={() => (setOpenFilter4(!openFilter4))}>
                            <h3>Kalıp Türü</h3>
                            {openFilter4 ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
                        </button>
                        <main style={openFilter4 ? {display: 'flex'} : {}}>
                            <p><input type="checkbox" name="" id="" /> Oversize</p>
                            <p><input type="checkbox" name="" id="" /> Muscle Fit</p>
                            <p><input type="checkbox" name="" id="" /> Uzun</p>
                        </main>
                    </div>
                    <div className="filter-item">
                        <button onClick={() => (setOpenFilter5(!openFilter5))}>
                            <h3>Yaka Tipi</h3>
                            {openFilter5 ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
                        </button>
                        <main style={openFilter5 ? {display: 'flex'} : {}}>
                            <p><input type="checkbox" name="" id="" /> Bisiklet Yaka</p>
                            <p><input type="checkbox" name="" id="" /> V Yaka</p>
                            <p><input type="checkbox" name="" id="" /> Katlı</p>
                        </main>
                    </div>
                    <div className="filter-item">
                        <button onClick={() => (setOpenFilter6(!openFilter6))}>
                            <h3>Beden</h3>
                            {openFilter6 ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
                        </button>
                        <main style={openFilter6 ? {display: 'flex'} : {}}>
                            <p><input type="checkbox" name="" id="" /> XXS</p>
                            <p><input type="checkbox" name="" id="" /> XS</p>
                            <p><input type="checkbox" name="" id="" /> S</p>
                            <p><input type="checkbox" name="" id="" /> M</p>
                            <p><input type="checkbox" name="" id="" /> L</p>
                            <p><input type="checkbox" name="" id="" /> XL</p>
                            <p><input type="checkbox" name="" id="" /> XXL</p>
                        </main>
                    </div>
                </main>
            </div>
            }

            <div className="shop-page-left">

                <div className="filter-item">
                    <button onClick={() => (setOpenFilter1(!openFilter1))}>
                        <h3>Koleksiyon</h3>
                        {openFilter1 ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
                    </button>
                    <main style={openFilter1 ? {display: 'flex'} : {}}>
                        <p><input type="checkbox" name="" id="" /> Hafif ve Rahat</p>
                        <p><input type="checkbox" name="" id="" /> Klasik Dokunuşlar</p>
                        <p><input type="checkbox" name="" id="" /> Sade ve Şık</p>
                        <p><input type="checkbox" name="" id="" /> Retro Esintiler</p>
                        <p><input type="checkbox" name="" id="" /> Sokak Modası</p>
                        <p><input type="checkbox" name="" id="" /> Renkli Rüyalar</p>
                    </main>
                </div>

                <div className="filter-item">
                    <button onClick={() => (setOpenFilter2(!openFilter2))}>
                        <h3>Fiyat Aralığı</h3>
                        {openFilter2 ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
                    </button>
                    <main style={openFilter2 ? {display: 'flex'} : {}}>
                        <p><input type="checkbox" name="" id="" /> 0 - 250 TL</p>
                        <p><input type="checkbox" name="" id="" /> 251 TL - 500 TL</p>
                        <p><input type="checkbox" name="" id="" /> 501 TL - 750 TL</p>
                        <p><input type="checkbox" name="" id="" /> 751 TL - 1000 TL</p>
                        <p><input type="checkbox" name="" id="" /> 1001 TL - 1500 TL</p>
                        <p><input type="checkbox" name="" id="" /> 1501 TL - 2000 TL</p>
                        <p><input type="checkbox" name="" id="" /> 2001 TL ve üzeri</p>
                    </main>
                </div>

                <div className="filter-item">
                    <button onClick={() => (setOpenFilter3(!openFilter3))}>
                        <h3>Değerlendirme</h3>
                        {openFilter3 ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
                    </button>
                    <main style={openFilter3 ? {display: 'flex'} : {}}>
                        <p><input type="checkbox" name="" id="" /> <i className="fa-solid fa-star"></i> <i className="fa-regular fa-star"></i> <i className="fa-regular fa-star"></i> <i className="fa-regular fa-star"></i> <i className="fa-regular fa-star"></i></p>
                        <p><input type="checkbox" name="" id="" /> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-regular fa-star"></i> <i className="fa-regular fa-star"></i> <i className="fa-regular fa-star"></i></p>
                        <p><input type="checkbox" name="" id="" /> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-regular fa-star"></i> <i className="fa-regular fa-star"></i></p>
                        <p><input type="checkbox" name="" id="" /> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-regular fa-star"></i></p>
                        <p><input type="checkbox" name="" id="" /> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i></p>

                    </main>
                </div>

                <div className="filter-item">
                    <button onClick={() => (setOpenFilter4(!openFilter4))}>
                        <h3>Kalıp Türü</h3>
                        {openFilter4 ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
                    </button>
                    <main style={openFilter4 ? {display: 'flex'} : {}}>
                        <p><input type="checkbox" name="" id="" /> Oversize</p>
                        <p><input type="checkbox" name="" id="" /> Muscle Fit</p>
                        <p><input type="checkbox" name="" id="" /> Uzun</p>
                    </main>
                </div>

                <div className="filter-item">
                    <button onClick={() => (setOpenFilter5(!openFilter5))}>
                        <h3>Yaka Tipi</h3>
                        {openFilter5 ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
                    </button>
                    <main style={openFilter5 ? {display: 'flex'} : {}}>
                        <p><input type="checkbox" name="" id="" /> Bisiklet Yaka</p>
                        <p><input type="checkbox" name="" id="" /> V Yaka</p>
                        <p><input type="checkbox" name="" id="" /> Katlı</p>
                    </main>
                </div>

                <div className="filter-item">
                    <button onClick={() => (setOpenFilter6(!openFilter6))}>
                        <h3>Beden</h3>
                        {openFilter6 ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
                    </button>
                    <main style={openFilter6 ? {display: 'flex'} : {}}>
                        <p><input type="checkbox" name="" id="" /> XXS</p>
                        <p><input type="checkbox" name="" id="" /> XS</p>
                        <p><input type="checkbox" name="" id="" /> S</p>
                        <p><input type="checkbox" name="" id="" /> M</p>
                        <p><input type="checkbox" name="" id="" /> L</p>
                        <p><input type="checkbox" name="" id="" /> XL</p>
                        <p><input type="checkbox" name="" id="" /> XXL</p>
                    </main>
                </div>

            </div>

            <div className="shop-page-right">
                <header>
                    <select onChange={handleSelectGender}>
                        <option value="man">Erkek</option>
                        <option value="woman">Kadın</option>
                        <option value="child">Çocuk</option>
                    </select>
                    <button onClick={() => (setOpenFilterBox(true))} className="mobile-filter-button"><i className="fa-solid fa-filter"></i></button>
                    <select>
                        <option value="">Sırala</option>
                        <option value="">En çok beğenilen</option>
                        <option value="">En çok satılan</option>
                        <option value="">Ucuzdan pahalıya</option>
                        <option value="">Pahalıdan ucuza</option>
                    </select>
                </header>

                <main>
                    {
                        pageOrder === 1 &&
                        products.filter(x => x.gender === filterGender).slice(0,9).map(x => (
                            <Link to={`/urun/${x.gender}/${x.id}`} key={x.id} className="product-item">
                                <img src={x.image01} alt="" />
                                <img src={x.image02} alt="" />
                                <div style={{backgroundColor: x.color}} className="color"></div>
                                <h3>{x.name}</h3>
                                <h1>{x.price} TL</h1>
                            </Link>
                        )) ||
                        pageOrder === 2 &&
                        products.filter(x => x.gender === filterGender).slice(9,18).map(x => (
                            <Link to={`/urun/${x.gender}/${x.id}`} key={x.id} className="product-item">
                                <img src={x.image01} alt="" />
                                <img src={x.image02} alt="" />
                                <div style={{backgroundColor: x.color}} className="color"></div>
                                <h3>{x.name}</h3>
                                <h1>{x.price} TL</h1>
                            </Link>
                        ))
                    }
                </main>

                <footer>
                    {products.filter(x => x.gender === filterGender).length > 0 && <button onClick={() => (setPageOrder(1))} style={pageOrder === 1 ? {backgroundColor: '#4338CA', color: '#fff'} : {}}>1</button>}
                    {products.filter(x => x.gender === filterGender).length > 9 && <button onClick={() => (setPageOrder(2))} style={pageOrder === 2 ? {backgroundColor: '#4338CA', color: '#fff'} : {}}>2</button>}
                    {products.filter(x => x.gender === filterGender).length > 18 && <button onClick={() => (setPageOrder(3))} style={pageOrder === 3 ? {backgroundColor: '#4338CA', color: '#fff'} : {}}>3</button>}
                </footer>
            </div>


        </div>

        <Footer />

        </>
    )
}