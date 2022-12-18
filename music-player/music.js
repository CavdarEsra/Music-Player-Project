//müzikle ilgili bilgileri yazıcaz

class Music {   //Music objesi
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {   //getName methodu çağrıldığında şarkı başlığı ve sanatçısı gelir
        return this.title + " - " + this.singer;
    }
}

const musicList = [    //Music objesi üzerinden müzik listesi oluşturulur 
    new Music("Boşver", "Nilüfer","1.jpeg","1.mp3"),    
    new Music("Bu da Geçer mi Sevgilim", "Yalın","2.jpeg","2.mp3"),    
    new Music("Aramızda Uçurumlar", "Suat Suna","3.jpeg","3.mp3")    
];
