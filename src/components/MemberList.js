import React from 'react'
import MemberCard from './MemberCard'

const MemberList = (props) => {
  const members = [
    {
      id: 1,
      img:
        'https://i.pinimg.com/736x/56/ce/f7/56cef7bf9e1a552f457daa34121605da.jpg',
      name: 'Ned Plimpton "Kingsley Zissou"',
      role:
        "Longtime Zissou fan whose mother has recently died, and he believes that Zissou is his father. After they meet at Zissou's latest premiere, Ned takes leave from his job as an airline pilot in Kentucky to join his crew.",
      favorite_drink: 'Old-Fashioned',
      quote: "I've never seen so many electric jellyfish in all my life!",
    },
    {
      id: 2,
      img: 'https://pbs.twimg.com/media/EGzh3mqXUAABm-S.jpg',
      name: 'Jane Winslett-Richardson',
      role:
        "Journalist visiting the Belafonte on behalf of Oceanographic Explorer to document Team Zissou's journey to track down and kill the Jaguar shark, avenging Zissou's best friend.",
      favorite_drink: 'Vodka Tonic',
      quote: 'I need to find a baby for this father.',
    },
    {
      id: 3,
      img:
        'https://i.pinimg.com/originals/72/3d/67/723d6778c8002b748dc36dd43136e8aa.jpg',
      name: 'Klaus Daimler',
      role:
        'First Mate. A testy, calm and collected German.  Blindly loyal to Zissou.',
      favorite_drink: 'Jägermeister',
      quote: "Not if I don't see you first, sonny...",
    },
    {
      id: 4,
      img:
        'https://i.pinimg.com/originals/ac/71/cb/ac71cbf5f110ca4fc5747a7df38e3d0b.jpg',
      name: 'Eleanor Zissou',
      role:
        "Estranged wife of Steve Zissou.  Provided most of the financial backing for all of Team Zissou's expeditions.  Chief Strategist.",
      favorite_drink: 'Cosmopolitan',
      quote:
        'Eleanor Zissou: Oh, Shit. What do you want? Steve Zissou: Do you mind if I buddy up a little before I answer that question?Eleanor Zissou: Yes, I do. Tell me now.  Steve Zissou: [takes a deep breath] I need some money to get the boat out of hock and rescue my bond company stooge who got kidnapped. Could we ask your parents to loan it to me?Eleanor Zissou: No.  Steve Zissou: Okay. Could I go ahead and buddy up anyway? It took me two and a half hours to get out here.',
    },
    {
      id: 5,
      img: 'https://breakinggeek.files.wordpress.com/2013/10/aquatic1.jpg',
      name: 'Alistair Hennessey',
      role: 'A more successful oceanographer than Zissou, and his nemesis.',
      favorite_drink: 'Hennessey, neat',
      quote: 'Be still, Cody.',
    },
    {
      id: 6,
      img:
        'https://www.listchallenges.com/f/items/4e0f1bbe-7261-48a0-9537-d7cff8a058a5.jpg',
      name: 'Bill Ubell',
      role:
        "The bond company stooge who is assigned to the Jaguar Shark project.  Invest's in Team Zissou, although skeptical.  Later kidnapped by Filipino pirates.",
      favorite_drink: "O'douls",
      quote:
        "Bill Ubell here. I'm on a pay phone. I am still blindfolded. My arms are bound. But a young boy has been kind enough to assist me. There's not much chance I'll get another opportunity to call... so I thought I would ask if- What? No.",
    },
    {
      id: 7,
      img:
        'https://i.pinimg.com/474x/61/94/33/619433664a908d70f9dc5702a9d7db47.jpg',
      name: 'Oseary Drakoulias',
      role: 'Financier. Sets Team Zissou up with funding via a skeptical bank.',
      favorite_drink: 'Cabernet Sauvignon',
      quote: "We're a dying breed.",
    },
    {
      id: 8,
      img: 'https://www.aveleyman.com/Gallery/2017/T/20484-26562.jpg',
      name: 'Vladimir Wolodarsky',
      role: ' Physicist and soundtrack composer',
      favorite_drink: 'Vodka, chilled',
      quote:
        'Steve, one of the interns just fell down the stairs with the main tracking processor.',
    },
    {
      id: 9,
      img:
        'https://cdn.shopify.com/s/files/1/0802/3645/products/deca3271dd0130b448dc7f356112073b_1024x1024.jpg?v=1548074817',
      name: 'Pelé dos Santos',
      role:
        'A safety expert and Brazilian guitarist who sings David Bowie songs in Portuguese',
      favorite_drink: 'Caipirinha',
      quote:
        'Vladimir Wolodarsky : [talking about Jane]  I like her hairdo.Pelé dos Santos : Me too, but Steve called her first.',
    },
    {
      id: 10,
      img: 'https://www.aveleyman.com/Gallery/2017/C/57764.jpg',
      name: 'Anne-Marie Sakowitz',
      role: 'Nude sunbathing script supervisor.',
      favorite_drink: 'Piña colada',
      quote:
        "I think it's criminal that Steve allowed this to happen, by which I mean illegal. We're being led on an illegal suicide mission by a selfish maniac.",
    },
    {
      id: 11,
      img:
        'http://www.imfdb.org/images/thumb/b/b7/LifeAq_27.jpg/600px-LifeAq_27.jpg',
      name: 'Vikram Ray',
      role: 'Cameraman.  Born on the Ganges.',
      favorite_drink: 'Mojito',
      quote: '',
    },
    {
      id: 12,
      img: 'https://www.rushmoreacademy.com/academy/images/duplantier.jpg',
      name: 'Esteban du Plantier',
      role: "Steve's best friend and Chief Diver.  Eaten by the Jaguar Shark",
      favorite_drink: 'Pinot Noir',
      quote: "He's the Zissou.",
    },
    {
      id: 13,
      img:
        'https://seenonceleb.com/wp-content/uploads/2019/06/The-t-shirt-as-a-trainee-Intern-Team-Zissou-in-The-life-aquatic-movie.jpg',
      name: 'Interns',
      role:
        'A group of unpaid interns from the Northern University of Alaska.  Joining Team Zissou for a college credit.',
      favorite_drink: 'Will drink anything',
      quote: "Don't point that gun at him, he's an unpaid intern.",
    },
    {
      id: 14,
      img:
        'https://www.hobbydb.com/processed_uploads/subject_photo/subject_photo/image/36906/1518207814-13368-5527/3051336-poster-p-1-the-many-reasons-bill-murray-missed-out-on-major-movies_large.jpg',
      name: 'Steve Zissou',
      role:
        'Captain of the Belafonte.  Famous oceanographer, trying to get back on his feet.',
      favorite_drink: 'Campari',
      quote:
        "Now if you'll excuse me, I'm going to go on an overnight drunk, and in 10 days I'm going to set out to find the shark that ate my friend and destroy it. Anyone who wants to join me is more than welcome.",
    },
    {
      id: 15,
      img:
        'https://consequenceofsound.net/wp-content/uploads/2016/02/47-e1455729067308.jpg?w=806',
      name: 'Cody the Three-Legged Dog',
      role:
        'A three-legged dog found on the island of Filipino pirates.  Team Zissou adopted Cody.',
      favorite_drink: 'H2O, neat',
      quote: 'Wooof',
    },
    {
      id: 16,
      img:
        'https://i.pinimg.com/600x315/68/af/69/68af69cae98a4dbc43fcce78562c3149.jpg',
      name: 'Crayon Ponyfish',
      role: 'A majestic species of seahorse',
      favorite_drink: '',
      quote: '',
    },
    {
      id: 17,
      img:
        'https://kaiju.wdfiles.com/local--files/wiki:jaguar_shark/jaguar_shark_2004_01.jpg',
      name: 'Jaguar Shark',
      role:
        'The elusive, luminescently-spotted shark that ate Esteban.  Possibly non-existent.',
      favorite_drink: '',
      quote: '',
    },
  ]

  return (
    <div>
      {members.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  )
}

export default MemberList
