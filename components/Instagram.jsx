import React from 'react'
const IgImg1 = '/../public/ig-img-1.jpeg';
const IgImg2 = '/../public/ig-img-2.jpeg';
const IgImg3 = '/../public/ig-img-3.jpeg';
const IgImg4 = '/../public/ig-img-4.jpeg';
const IgImg5 = '/../public/ig-img-5.jpeg';
const IgImg6 = '/../public/ig-img-6.jpeg';
const IgImg22 = '/../public/ig-img-22.jpeg';
const IgImg33 = '/../public/ig-img-33.jpeg';
const IgImg44 = '/../public/ig-img-44.jpeg';
import InstagramImg from './InstagramImg';

const names = {
  president: ["Muhamed Shehi", "President", IgImg1],
  drejtorTeknik: ["Xhekson Titini", "Drejtor Teknik", IgImg2],
  trajneriKombetares: ["Rei Saliasi", "Trajner i Kombetares", IgImg4],
  trajneriKombetares2: ["Bektash Merkuri", "Trajner i Kombetares", IgImg5],
  sekretar: ["Albino Ndreu", "Sekretar", IgImg3],
  zvSekretare: ["Fiona Shameti", "Zv. Sekretare", IgImg33],
  ndihmesSekretare: ["Olisa Shameti", "Ndihmes Sekretare", IgImg22],
  instruktor2: ["Aron Shehi", "Instruktor", IgImg44],
  instruktor: ["Muslim Selaci", "Instruktor", IgImg6]

}

const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
      <p className='text-2xl font-bold'>Stafi Yne</p>
      <p className='pb-4'>Faleminderit per kontributin</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
        {Object.values(names).map((name, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div className='w-[150px] h-[150px] overflow-hidden rounded-full'>
              <InstagramImg socialImg={name[2]} className='w-full h-full object-cover' />
            </div>
            <p className='pb-4 mt-3 font-bold'>{name[0]}</p>
            <p className='pb-2 mt-1'>{name[1]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Instagram;