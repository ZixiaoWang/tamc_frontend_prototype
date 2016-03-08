var about_en = [
  {
    url:'templates/slim-header.html',
    logo:'img/logo.png',
    items:[
    {name:'About TAMC',url:'./about.html'},
    {name:'Seminar',  url:'./seminar.html'},
    {name:'Events', url:'./events.html'},
    {name:'Exhibition', url:'./exhibition.html'},
    {name:'Contact Us',url:'./contactUs.html'}
    ],
    active:0
  },
  {
    url:'templates/image-event.html',
    title:'',
    image:'http://placehold.it/375x375',
    content:'Our mission statement is to assemble electronic music’s most legendary and innovative artists and professionals from across the globe to demonstrate the huge potential for Electronic Dance Music throughout Asia.',
    button:'Details',
    link:'http://google.com'
  },
  {
    url:'templates/video-event.html',
    title:'Cum sociis natoaue panatibus etmas nisdis partiusdf movnes',
    image:'http://placehold.it/375x375',
    content:'Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    button:'SEE OUR CONFERENCE',
    link:'https://www.youtube.com/watch?v=TEaE2SkPunY'
  },
  {
    url:'templates/schedule.html',
    events:[
      {
        date:'2 JUN',
        week:'THURSDAY',
        dayEvents:[
          {
            time:'18:30 – 22:30PM',
            events:[
              {
                title:'Gala Garden Networking Event',
                link:'https://google.com',
                content:'Entry: Industry People Only'
              }
            ] // events
          }
        ] // dayEvents
      },
      {
        date:'3 JUN',
        week:'FRIDAY',
        dayEvents:[
          {
            time:'12:00AM – 19:00PM',
            events:[
              {
                title:'Seminar',
                link:'https://google.com',
                content:'Selected Delegates'
              }
            ]
          },
          {
            time:'0:00AM – 06:00AM',
            events:[
              {
                title:'Nightclub Event Ft. Int Dj @Pacha',
                link:'https://google.com',
                content:'Entry: Paid Entry (Price Tbc)'
              }
            ]
          }
        ]
      },
	      {
	        date:'4 JUN',
	        week:'SATURDAY',
	        dayEvents:[
	          {
	            time:'4:00PM – 00:00AM',
	            events:[
	              {
	                title:'Pool Party @Hardrock',
                    link:'https://google.com',
	                content:'Entry: Paid Entry (Price Tbc)'
	              }
	            ]
	          },
	          {
	            time:'0:00AM – 06:00AM',
	            events:[
	              {
	                title:'Nightclub Event Ft. Int Dj @Club Cubic', 
                    link:'https://google.com',
	                content:'Entry: Paid Entry (Price Tbc)'
	              }
	            ]
	          }
	        ]
	      }
    ] // month Events
  },
  {
    url:'templates/partner.html',
    partners:[
      {url:'img/partners/1.png'},
      {url:'img/partners/2.png'},
      {url:'img/partners/3.png'},
      {url:'img/partners/4.png'},
      {url:'img/partners/5.png'},
      {url:'img/partners/6.png'},
      {url:'img/partners/7.png'},
      {url:'img/partners/8.png'}
    ]
  },
  {
    url:'templates/footer.html',
    logo:'img/logo-footer.png',
    items:[
      {name:'Conference',url:'./about.html'},
      {name:'Seminar',  url:'./seminar.html'},
      {name:'Events', url:'./events.html'},
      {name:'Exhibition', url:'./exhibition.html'},
      {name:'Contact Us',url:'./contactUs.html'}
    ]
  }
];

var about_cn = [
  {
    url:'templates/slim-header.html',
    logo:'img/logo.png',
    items:[
      {
        name:'研讨会',
        forpanel:{
          image:'http://placehold.it/375x375',
          title:'最新讨论',
          lists:[
            {
              title:'TAMC 一对一 (嘉宾1)',
              url:'./seminar.html'
            },
            {
              title:'亚洲俱乐部文化 - 本地吧主',
              url:'#'
            },
            {
              title:'亚洲俱乐部文化 - 地区吧主',
              url:'#'
            },
            {
              title:'亚洲俱乐部文化 - 促进者',
              url:'#'
            },
            {
              title:'亚洲音乐节展望',
              url:'#'
            },
            {
              title:'TAMC 一对一 (嘉宾2)',
              url:'#'
            }
          ]
        }
      },
      {name:'活动', url:'./events.html'},
      {name:'展览', url:'./exhibition.html'},
      {name:'关于 TAMC',url:'./about.html'},
      {name:'联系我们',url:'./contactUs.html'}
    ],
    active:3
  },
  {
    url:'templates/image-event.html',
    title:'这是第一个标题',
    image:'http://placehold.it/375x375',
    content:'随便一些什么东西',
    button:'SEE OUR CONFERENCE',
    link:'http://google.com'
  },
  {
    url:'templates/video-event.html',
    title:'这是第二个标题',
    image:'http://placehold.it/375x375',
    content:'随便一些什么东西，随便一些什么东西',
    button:'SEE OUR CONFERENCE',
    link:'https://www.youtube.com/watch?v=TEaE2SkPunY'
  },
  {
    url:'templates/partner.html',
    partners:[
      {url:'img/partners/1.png'},
      {url:'img/partners/2.png'},
      {url:'img/partners/3.png'},
      {url:'img/partners/4.png'},
      {url:'img/partners/5.png'},
      {url:'img/partners/6.png'},
      {url:'img/partners/7.png'},
      {url:'img/partners/8.png'}
    ]
  },
  {
    url:'templates/footer.html',
    logo:'img/logo-footer.png',
    items:[
      {name:'Conference',url:'./about.html'},
      {name:'Seminar',  url:'./seminar.html'},
      {name:'Events', url:'./events.html'},
      {name:'Exhibition', url:'./exhibition.html'},
      {name:'Contact Us',url:'./contactUs.html'}
    ]
  }
];

var about = {
  'en': about_en,
  'cn': about_cn
};
