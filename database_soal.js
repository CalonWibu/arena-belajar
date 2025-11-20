const DATABASE_SOAL = {
    "bindo": [
        // --- MATERI: PUISI ---
        {
            mapel: "bindo", materi: "Puisi",
            question: "Siapa pengarang puisi terkenal berjudul 'Aku'?",
            options: [{ text: "Chairil Anwar", isCorrect: true, label: "A" }, { text: "WS Rendra", isCorrect: false, label: "B" }, { text: "Sapardi Djoko", isCorrect: false, label: "C" }, { text: "Taufiq Ismail", isCorrect: false, label: "D" }],
            damage: 20, type: 'api', explanation: "'Aku' adalah karya legendaris Chairil Anwar (Angkatan 45)."
        },
        {
            mapel: "bindo", materi: "Puisi",
            question: "Majas yang membandingkan benda mati seolah-olah hidup disebut?",
            options: [{ text: "Hiperbola", isCorrect: false, label: "A" }, { text: "Personifikasi", isCorrect: true, label: "B" }, { text: "Metafora", isCorrect: false, label: "C" }, { text: "Litotes", isCorrect: false, label: "D" }],
            damage: 15, type: 'es', explanation: "Personifikasi memberikan sifat manusia pada benda mati."
        },
        {
            mapel: "bindo", materi: "Puisi",
            question: "Persamaan bunyi pada akhir baris puisi disebut?",
            options: [{ text: "Bait", isCorrect: false, label: "A" }, { text: "Rima", isCorrect: true, label: "B" }, { text: "Diksi", isCorrect: false, label: "C" }, { text: "Irama", isCorrect: false, label: "D" }],
            damage: 10, type: 'es', explanation: "Rima adalah pengulangan bunyi berselang."
        },
        // --- MATERI: BERITA ---
        {
            mapel: "bindo", materi: "Berita",
            question: "Unsur pokok berita dikenal dengan istilah?",
            options: [{ text: "4 Sehat 5 Sempurna", isCorrect: false, label: "A" }, { text: "5W + 1H", isCorrect: true, label: "B" }, { text: "SPOK", isCorrect: false, label: "C" }, { text: "PUEBI", isCorrect: false, label: "D" }],
            damage: 15, type: 'petir', explanation: "What, Where, When, Who, Why, How."
        },
        {
            mapel: "bindo", materi: "Berita",
            question: "Bagian awal berita yang berisi inti informasi disebut?",
            options: [{ text: "Ekor Berita", isCorrect: false, label: "A" }, { text: "Tubuh Berita", isCorrect: false, label: "B" }, { text: "Kepala Berita (Lead)", isCorrect: true, label: "C" }, { text: "Judul", isCorrect: false, label: "D" }],
            damage: 20, type: 'api', explanation: "Lead memuat informasi terpenting."
        },
        {
            mapel: "bindo", materi: "Berita",
            question: "Bahasa dalam berita harus bersifat?",
            options: [{ text: "Subjektif", isCorrect: false, label: "A" }, { text: "Objektif dan Faktual", isCorrect: true, label: "B" }, { text: "Kiasan", isCorrect: false, label: "C" }, { text: "Imajinatif", isCorrect: false, label: "D" }],
            damage: 15, type: 'es', explanation: "Berita harus berdasarkan fakta nyata."
        },
        // --- MATERI: TEKS HASIL OBSERVASI ---
        {
            mapel: "bindo", materi: "Teks Hasil Observasi",
            question: "Teks LHO disusun berdasarkan?",
            options: [{ text: "Opini penulis", isCorrect: false, label: "A" }, { text: "Hasil pengamatan", isCorrect: true, label: "B" }, { text: "Imajinasi", isCorrect: false, label: "C" }, { text: "Rumor", isCorrect: false, label: "D" }],
            damage: 20, type: 'es', explanation: "LHO basisnya adalah observasi/pengamatan lapangan."
        },
        {
            mapel: "bindo", materi: "Teks Hasil Observasi",
            question: "Kalimat yang menyatakan makna atau pengertian disebut kalimat?",
            options: [{ text: "Deskripsi", isCorrect: false, label: "A" }, { text: "Definisi", isCorrect: true, label: "B" }, { text: "Imperatif", isCorrect: false, label: "C" }, { text: "Kompleks", isCorrect: false, label: "D" }],
            damage: 25, type: 'petir', explanation: "Contoh: 'Kucing adalah hewan mamalia...'"
        },
        {
            mapel: "bindo", materi: "Teks Hasil Observasi",
            question: "Struktur pertama teks laporan hasil observasi adalah?",
            options: [{ text: "Deskripsi Bagian", isCorrect: false, label: "A" }, { text: "Pernyataan Umum", isCorrect: true, label: "B" }, { text: "Simpulan", isCorrect: false, label: "C" }, { text: "Saran", isCorrect: false, label: "D" }],
            damage: 20, type: 'api', explanation: "Dimulai dengan definisi umum objek."
        },
        // --- MATERI: KARYA TULIS ILMIAH ---
        {
            mapel: "bindo", materi: "Karya Tulis Ilmiah",
            question: "Daftar sumber referensi dalam KTI disebut?",
            options: [{ text: "Daftar Isi", isCorrect: false, label: "A" }, { text: "Daftar Pustaka", isCorrect: true, label: "B" }, { text: "Lampiran", isCorrect: false, label: "C" }, { text: "Glosarium", isCorrect: false, label: "D" }],
            damage: 25, type: 'es', explanation: "Daftar pustaka wajib ada untuk validitas data."
        },
        {
            mapel: "bindo", materi: "Karya Tulis Ilmiah",
            question: "Bagian KTI yang berisi alasan pemilihan judul adalah?",
            options: [{ text: "Latar Belakang", isCorrect: true, label: "A" }, { text: "Rumusan Masalah", isCorrect: false, label: "B" }, { text: "Tujuan", isCorrect: false, label: "C" }, { text: "Metode", isCorrect: false, label: "D" }],
            damage: 30, type: 'api', explanation: "Latar belakang menjelaskan 'mengapa' topik dipilih."
        },
        {
            mapel: "bindo", materi: "Karya Tulis Ilmiah",
            question: "Bahasa dalam KTI harus?",
            options: [{ text: "Santai", isCorrect: false, label: "A" }, { text: "Baku dan Denotatif", isCorrect: true, label: "B" }, { text: "Konotatif", isCorrect: false, label: "C" }, { text: "Gaul", isCorrect: false, label: "D" }],
            damage: 20, type: 'petir', explanation: "Harus formal dan makna sebenarnya (denotatif)."
        },
        // --- MATERI: RESENSI ---
        {
            mapel: "bindo", materi: "Resensi",
            question: "Tujuan utama resensi adalah?",
            options: [{ text: "Menjual buku", isCorrect: false, label: "A" }, { text: "Memberikan penilaian karya", isCorrect: true, label: "B" }, { text: "Mengkritik penulis", isCorrect: false, label: "C" }, { text: "Menulis ulang", isCorrect: false, label: "D" }],
            damage: 20, type: 'es', explanation: "Resensi menilai kelebihan dan kekurangan karya."
        },
        {
            mapel: "bindo", materi: "Resensi",
            question: "Data buku meliputi hal berikut, KECUALI?",
            options: [{ text: "Penerbit", isCorrect: false, label: "A" }, { text: "Tahun Terbit", isCorrect: false, label: "B" }, { text: "Harga Buku", isCorrect: false, label: "C" }, { text: "Hobi Penulis", isCorrect: true, label: "D" }],
            damage: 15, type: 'petir', explanation: "Hobi penulis bukan bagian dari identitas buku."
        },
        {
            mapel: "bindo", materi: "Resensi",
            question: "Ringkasan isi cerita dalam resensi disebut?",
            options: [{ text: "Sinopsis", isCorrect: true, label: "A" }, { text: "Orientasi", isCorrect: false, label: "B" }, { text: "Evaluasi", isCorrect: false, label: "C" }, { text: "Koda", isCorrect: false, label: "D" }],
            damage: 20, type: 'api', explanation: "Sinopsis adalah ikhtisar cerita."
        },
        // --- MATERI: DRAMA ---
        {
            mapel: "bindo", materi: "Drama",
            question: "Percakapan antar tokoh dalam drama disebut?",
            options: [{ text: "Monolog", isCorrect: false, label: "A" }, { text: "Dialog", isCorrect: true, label: "B" }, { text: "Prolog", isCorrect: false, label: "C" }, { text: "Epilog", isCorrect: false, label: "D" }],
            damage: 10, type: 'es', explanation: "Dialog adalah kunci utama naskah drama."
        },
        {
            mapel: "bindo", materi: "Drama",
            question: "Petunjuk laku/tindakan dalam naskah drama biasanya ditulis dalam kurung. Disebut?",
            options: [{ text: "Kramagung", isCorrect: true, label: "A" }, { text: "Wawancang", isCorrect: false, label: "B" }, { text: "Prolog", isCorrect: false, label: "C" }, { text: "Mimik", isCorrect: false, label: "D" }],
            damage: 40, type: 'api', explanation: "Kramagung adalah petunjuk teknis bagi aktor."
        },
        {
            mapel: "bindo", materi: "Drama",
            question: "Bagian penutup dalam drama disebut?",
            options: [{ text: "Prolog", isCorrect: false, label: "A" }, { text: "Dialog", isCorrect: false, label: "B" }, { text: "Epilog", isCorrect: true, label: "C" }, { text: "Babak", isCorrect: false, label: "D" }],
            damage: 15, type: 'es', explanation: "Epilog berisi kesimpulan atau amanat di akhir."
        },
        {
            mapel: "bindo", materi: "Drama",
            question: "Tokoh yang berwatak jahat disebut?",
            options: [{ text: "Protagonis", isCorrect: false, label: "A" }, { text: "Antagonis", isCorrect: true, label: "B" }, { text: "Tritagonis", isCorrect: false, label: "C" }, { text: "Figuran", isCorrect: false, label: "D" }],
            damage: 10, type: 'petir', explanation: "Antagonis adalah penentang tokoh utama."
        },
        {
            mapel: "bindo", materi: "Drama",
            question: "Ekspresi wajah saat memerankan drama disebut?",
            options: [{ text: "Gestur", isCorrect: false, label: "A" }, { text: "Mimik", isCorrect: true, label: "B" }, { text: "Blocking", isCorrect: false, label: "C" }, { text: "Vokal", isCorrect: false, label: "D" }],
            damage: 20, type: 'es', explanation: "Mimik adalah perubahan raut muka."
        }
    ],

    "bing": [
        // --- MATERI: TENSES ---
        {
            mapel: "bing", materi: "Tenses",
            question: "I ... fried rice every morning.",
            options: [{ text: "eat", isCorrect: true, label: "A" }, { text: "eating", isCorrect: false, label: "B" }, { text: "ate", isCorrect: false, label: "C" }, { text: "eats", isCorrect: false, label: "D" }],
            damage: 15, type: 'es', explanation: "Simple Present Tense (Habit) + Subject 'I'."
        },
        {
            mapel: "bing", materi: "Tenses",
            question: "She ... to the cinema yesterday.",
            options: [{ text: "go", isCorrect: false, label: "A" }, { text: "goes", isCorrect: false, label: "B" }, { text: "went", isCorrect: true, label: "C" }, { text: "gone", isCorrect: false, label: "D" }],
            damage: 20, type: 'petir', explanation: "Simple Past Tense (Yesterday) uses Verb 2."
        },
        {
            mapel: "bing", materi: "Tenses",
            question: "We ... watching TV right now.",
            options: [{ text: "is", isCorrect: false, label: "A" }, { text: "am", isCorrect: false, label: "B" }, { text: "are", isCorrect: true, label: "C" }, { text: "was", isCorrect: false, label: "D" }],
            damage: 15, type: 'es', explanation: "Present Continuous: We + are."
        },
        {
            mapel: "bing", materi: "Tenses",
            question: "By next year, I ... graduated from school.",
            options: [{ text: "will have", isCorrect: true, label: "A" }, { text: "will has", isCorrect: false, label: "B" }, { text: "have", isCorrect: false, label: "C" }, { text: "had", isCorrect: false, label: "D" }],
            damage: 40, type: 'api', explanation: "Future Perfect Tense."
        },
        // --- MATERI: DESCRIPTIVE TEXT ---
        {
            mapel: "bing", materi: "Descriptive Text",
            question: "The purpose of descriptive text is to...",
            options: [{ text: "Amuse the reader", isCorrect: false, label: "A" }, { text: "Describe a particular person/thing", isCorrect: true, label: "B" }, { text: "Retell past events", isCorrect: false, label: "C" }, { text: "Explain how to make something", isCorrect: false, label: "D" }],
            damage: 15, type: 'es', explanation: "Descriptive text menggambarkan objek spesifik."
        },
        {
            mapel: "bing", materi: "Descriptive Text",
            question: "Which tense is mostly used in Descriptive Text?",
            options: [{ text: "Simple Past", isCorrect: false, label: "A" }, { text: "Simple Present", isCorrect: true, label: "B" }, { text: "Future Tense", isCorrect: false, label: "C" }, { text: "Past Perfect", isCorrect: false, label: "D" }],
            damage: 20, type: 'petir', explanation: "Karena menjelaskan fakta/kebenaran umum objek."
        },
        {
            mapel: "bing", materi: "Descriptive Text",
            question: "Structure of descriptive text consists of Identification and...",
            options: [{ text: "Orientation", isCorrect: false, label: "A" }, { text: "Description", isCorrect: true, label: "B" }, { text: "Reorientation", isCorrect: false, label: "C" }, { text: "Complication", isCorrect: false, label: "D" }],
            damage: 25, type: 'es', explanation: "Identification -> Description."
        },
        // --- MATERI: NARRATIVE TEXT ---
        {
            mapel: "bing", materi: "Narrative Text",
            question: "Which one is an example of Narrative Text?",
            options: [{ text: "How to make coffee", isCorrect: false, label: "A" }, { text: "Cinderella", isCorrect: true, label: "B" }, { text: "Borobudur Temple", isCorrect: false, label: "C" }, { text: "My Holiday", isCorrect: false, label: "D" }],
            damage: 10, type: 'es', explanation: "Cinderella adalah dongeng (Fairy Tale)."
        },
        {
            mapel: "bing", materi: "Narrative Text",
            question: "The problem in the story is called...",
            options: [{ text: "Resolution", isCorrect: false, label: "A" }, { text: "Orientation", isCorrect: false, label: "B" }, { text: "Complication", isCorrect: true, label: "C" }, { text: "Coda", isCorrect: false, label: "D" }],
            damage: 20, type: 'api', explanation: "Complication berisi munculnya konflik."
        },
        {
            mapel: "bing", materi: "Narrative Text",
            question: "Narrative text usually uses...",
            options: [{ text: "Action Verbs", isCorrect: true, label: "A" }, { text: "Present Tense", isCorrect: false, label: "B" }, { text: "Scientific terms", isCorrect: false, label: "C" }, { text: "Data", isCorrect: false, label: "D" }],
            damage: 25, type: 'petir', explanation: "Action verbs (V2) seperti killed, walked, drank."
        },
        // --- MATERI: RECOUNT TEXT ---
        {
            mapel: "bing", materi: "Recount Text",
            question: "Recount text is a text that...",
            options: [{ text: "Tells a story", isCorrect: false, label: "A" }, { text: "Retells past experience", isCorrect: true, label: "B" }, { text: "Describes things", isCorrect: false, label: "C" }, { text: "Persuades people", isCorrect: false, label: "D" }],
            damage: 15, type: 'es', explanation: "Recount menceritakan ulang pengalaman."
        },
        {
            mapel: "bing", materi: "Recount Text",
            question: "A biography of a famous person is a type of?",
            options: [{ text: "Narrative", isCorrect: false, label: "A" }, { text: "Procedure", isCorrect: false, label: "B" }, { text: "Recount", isCorrect: true, label: "C" }, { text: "Report", isCorrect: false, label: "D" }],
            damage: 20, type: 'es', explanation: "Biografi menceritakan urutan hidup (Faktual Recount)."
        },
        {
            mapel: "bing", materi: "Recount Text",
            question: "Connector words used in Recount Text usually are...",
            options: [{ text: "First, Then, Finally", isCorrect: true, label: "A" }, { text: "Because, Although", isCorrect: false, label: "B" }, { text: "If, Unless", isCorrect: false, label: "C" }, { text: "Or, But", isCorrect: false, label: "D" }],
            damage: 15, type: 'petir', explanation: "Chronological connectors."
        },
        // --- MATERI: VOCABULARY ---
        {
            mapel: "bing", materi: "Vocabulary",
            question: "What is the synonym of 'Big'?",
            options: [{ text: "Small", isCorrect: false, label: "A" }, { text: "Huge", isCorrect: true, label: "B" }, { text: "Tiny", isCorrect: false, label: "C" }, { text: "Short", isCorrect: false, label: "D" }],
            damage: 10, type: 'es', explanation: "Huge artinya sangat besar."
        },
        {
            mapel: "bing", materi: "Vocabulary",
            question: "Someone who cooks in a restaurant is a...",
            options: [{ text: "Chef", isCorrect: true, label: "A" }, { text: "Chief", isCorrect: false, label: "B" }, { text: "Waiter", isCorrect: false, label: "C" }, { text: "Cashier", isCorrect: false, label: "D" }],
            damage: 10, type: 'es', explanation: "Chef = Juru masak."
        },
        {
            mapel: "bing", materi: "Vocabulary",
            question: "Antonym of 'Diligent' is...",
            options: [{ text: "Smart", isCorrect: false, label: "A" }, { text: "Lazy", isCorrect: true, label: "B" }, { text: "Active", isCorrect: false, label: "C" }, { text: "Kind", isCorrect: false, label: "D" }],
            damage: 15, type: 'petir', explanation: "Diligent (Rajin) x Lazy (Malas)."
        },
        // --- MATERI: GRAMMAR ---
        {
            mapel: "bing", materi: "Grammar",
            question: "Passive Voice: 'She writes a letter'. The passive form is...",
            options: [{ text: "A letter is written by her", isCorrect: true, label: "A" }, { text: "A letter was written by her", isCorrect: false, label: "B" }, { text: "A letter are written by her", isCorrect: false, label: "C" }, { text: "A letter is wrote by her", isCorrect: false, label: "D" }],
            damage: 35, type: 'api', explanation: "Obj + is/am/are + V3 + by Subj."
        },
        {
            mapel: "bing", materi: "Grammar",
            question: "Conditional Type 1: If it rains, I ... stay at home.",
            options: [{ text: "would", isCorrect: false, label: "A" }, { text: "will", isCorrect: true, label: "B" }, { text: "would have", isCorrect: false, label: "C" }, { text: "had", isCorrect: false, label: "D" }],
            damage: 30, type: 'petir', explanation: "If Present, Future (will)."
        },
        {
            mapel: "bing", materi: "Grammar",
            question: "She is the ... girl in the class.",
            options: [{ text: "Beautiful", isCorrect: false, label: "A" }, { text: "More beautiful", isCorrect: false, label: "B" }, { text: "Most beautiful", isCorrect: true, label: "C" }, { text: "Beautifulest", isCorrect: false, label: "D" }],
            damage: 25, type: 'es', explanation: "Superlative degree untuk kata panjang pakai 'Most'."
        },
        {
            mapel: "bing", materi: "Grammar",
            question: "He goes to school ... bus.",
            options: [{ text: "in", isCorrect: false, label: "A" }, { text: "on", isCorrect: false, label: "B" }, { text: "by", isCorrect: true, label: "C" }, { text: "with", isCorrect: false, label: "D" }],
            damage: 15, type: 'petir', explanation: "Transportasi umum menggunakan preposisi 'by'."
        }
    ],

    "mtk": [
        // --- MATERI: ALJABAR ---
        {
            mapel: "mtk", materi: "Aljabar",
            question: "Jika 2x + 5 = 15, berapakah nilai x?",
            options: [{ text: "2", isCorrect: false, label: "A" }, { text: "5", isCorrect: true, label: "B" }, { text: "10", isCorrect: false, label: "C" }, { text: "7", isCorrect: false, label: "D" }],
            damage: 20, type: 'petir', explanation: "2x = 10, maka x = 5."
        },
        {
            mapel: "mtk", materi: "Aljabar",
            question: "Faktorkan: x² - 9 = ...",
            options: [{ text: "(x-3)(x-3)", isCorrect: false, label: "A" }, { text: "(x+3)(x-3)", isCorrect: true, label: "B" }, { text: "(x+9)(x-1)", isCorrect: false, label: "C" }, { text: "(x+3)(x+3)", isCorrect: false, label: "D" }],
            damage: 25, type: 'es', explanation: "Selisih dua kuadrat: a²-b² = (a+b)(a-b)."
        },
        {
            mapel: "mtk", materi: "Aljabar",
            question: "Nilai dari 3² + 4² adalah?",
            options: [{ text: "12", isCorrect: false, label: "A" }, { text: "25", isCorrect: true, label: "B" }, { text: "49", isCorrect: false, label: "C" }, { text: "14", isCorrect: false, label: "D" }],
            damage: 15, type: 'api', explanation: "9 + 16 = 25."
        },
        // --- MATERI: GEOMETRI ---
        {
            mapel: "mtk", materi: "Geometri",
            question: "Rumus luas lingkaran adalah?",
            options: [{ text: "2πr", isCorrect: false, label: "A" }, { text: "πr²", isCorrect: true, label: "B" }, { text: "p x l", isCorrect: false, label: "C" }, { text: "1/2 a x t", isCorrect: false, label: "D" }],
            damage: 20, type: 'es', explanation: "Luas lingkaran = pi kali r kuadrat."
        },
        {
            mapel: "mtk", materi: "Geometri",
            question: "Sudut siku-siku besarnya ... derajat.",
            options: [{ text: "45", isCorrect: false, label: "A" }, { text: "90", isCorrect: true, label: "B" }, { text: "180", isCorrect: false, label: "C" }, { text: "360", isCorrect: false, label: "D" }],
            damage: 10, type: 'petir', explanation: "Siku-siku tegak lurus = 90 derajat."
        },
        {
            mapel: "mtk", materi: "Geometri",
            question: "Segitiga dengan sisi 3 cm, 4 cm, 5 cm adalah segitiga?",
            options: [{ text: "Sama sisi", isCorrect: false, label: "A" }, { text: "Siku-siku", isCorrect: true, label: "B" }, { text: "Tumpul", isCorrect: false, label: "C" }, { text: "Lancip", isCorrect: false, label: "D" }],
            damage: 30, type: 'api', explanation: "Tripel Pythagoras 3,4,5 membentuk siku-siku."
        },
        {
            mapel: "mtk", materi: "Geometri",
            question: "Volume kubus dengan sisi 5 cm adalah?",
            options: [{ text: "25", isCorrect: false, label: "A" }, { text: "125", isCorrect: true, label: "B" }, { text: "100", isCorrect: false, label: "C" }, { text: "15", isCorrect: false, label: "D" }],
            damage: 25, type: 'petir', explanation: "s x s x s = 5 x 5 x 5 = 125."
        },
        // --- MATERI: STATISTIKA ---
        {
            mapel: "mtk", materi: "Statistika",
            question: "Nilai rata-rata disebut juga?",
            options: [{ text: "Modus", isCorrect: false, label: "A" }, { text: "Mean", isCorrect: true, label: "B" }, { text: "Median", isCorrect: false, label: "C" }, { text: "Kuartil", isCorrect: false, label: "D" }],
            damage: 15, type: 'es', explanation: "Mean adalah rata-rata hitung."
        },
        {
            mapel: "mtk", materi: "Statistika",
            question: "Data yang paling sering muncul disebut?",
            options: [{ text: "Mean", isCorrect: false, label: "A" }, { text: "Modus", isCorrect: true, label: "B" }, { text: "Median", isCorrect: false, label: "C" }, { text: "Range", isCorrect: false, label: "D" }],
            damage: 15, type: 'es', explanation: "Modus = Modal Dusta (Sering muncul)."
        },
        {
            mapel: "mtk", materi: "Statistika",
            question: "Median dari data: 2, 3, 5, 7, 9 adalah?",
            options: [{ text: "3", isCorrect: false, label: "A" }, { text: "5", isCorrect: true, label: "B" }, { text: "7", isCorrect: false, label: "C" }, { text: "5.2", isCorrect: false, label: "D" }],
            damage: 20, type: 'petir', explanation: "Nilai tengah dari data urut ganjil."
        },
        // --- MATERI: PELUANG ---
        {
            mapel: "mtk", materi: "Peluang",
            question: "Peluang muncul angka genap pada pelemparan satu dadu?",
            options: [{ text: "1/2", isCorrect: true, label: "A" }, { text: "1/3", isCorrect: false, label: "B" }, { text: "1/6", isCorrect: false, label: "C" }, { text: "2/3", isCorrect: false, label: "D" }],
            damage: 25, type: 'petir', explanation: "Angka genap (2,4,6) ada 3. Total 6. 3/6 = 1/2."
        },
        {
            mapel: "mtk", materi: "Peluang",
            question: "Peluang muncul gambar pada pelemparan satu koin?",
            options: [{ text: "1/4", isCorrect: false, label: "A" }, { text: "1/2", isCorrect: true, label: "B" }, { text: "1", isCorrect: false, label: "C" }, { text: "0", isCorrect: false, label: "D" }],
            damage: 15, type: 'es', explanation: "Koin hanya punya 2 sisi."
        },
        {
            mapel: "mtk", materi: "Peluang",
            question: "Banyaknya ruang sampel dua koin dilempar bersamaan?",
            options: [{ text: "2", isCorrect: false, label: "A" }, { text: "4", isCorrect: true, label: "B" }, { text: "8", isCorrect: false, label: "C" }, { text: "6", isCorrect: false, label: "D" }],
            damage: 20, type: 'api', explanation: "2 pangkat 2 = 4 (AA, AG, GA, GG)."
        },
        // --- MATERI: TRIGONOMETRI ---
        {
            mapel: "mtk", materi: "Trigonometri",
            question: "Nilai dari Sin 30° adalah?",
            options: [{ text: "0", isCorrect: false, label: "A" }, { text: "1/2", isCorrect: true, label: "B" }, { text: "1", isCorrect: false, label: "C" }, { text: "√3/2", isCorrect: false, label: "D" }],
            damage: 30, type: 'petir', explanation: "Sudut istimewa: Sin 30 = 0.5."
        },
        {
            mapel: "mtk", materi: "Trigonometri",
            question: "Tan 45° sama dengan?",
            options: [{ text: "0", isCorrect: false, label: "A" }, { text: "1", isCorrect: true, label: "B" }, { text: "∞", isCorrect: false, label: "C" }, { text: "1/2", isCorrect: false, label: "D" }],
            damage: 30, type: 'api', explanation: "Tan 45 = 1."
        },
        {
            mapel: "mtk", materi: "Trigonometri",
            question: "Sisi depan dibagi sisi miring adalah rumus?",
            options: [{ text: "Sinus", isCorrect: true, label: "A" }, { text: "Cosinus", isCorrect: false, label: "B" }, { text: "Tangen", isCorrect: false, label: "C" }, { text: "Secan", isCorrect: false, label: "D" }],
            damage: 25, type: 'es', explanation: "SinDeMi (Depan/Miring)."
        },
        // --- MATERI: KALKULUS ---
        {
            mapel: "mtk", materi: "Kalkulus",
            question: "Turunan pertama dari f(x) = 3x² adalah?",
            options: [{ text: "3x", isCorrect: false, label: "A" }, { text: "6x", isCorrect: true, label: "B" }, { text: "6", isCorrect: false, label: "C" }, { text: "x", isCorrect: false, label: "D" }],
            damage: 45, type: 'api', explanation: "2 dikali 3, pangkat dikurang 1."
        },
        {
            mapel: "mtk", materi: "Kalkulus",
            question: "Integral dari 2x dx adalah?",
            options: [{ text: "x² + C", isCorrect: true, label: "A" }, { text: "2x² + C", isCorrect: false, label: "B" }, { text: "2 + C", isCorrect: false, label: "C" }, { text: "x + C", isCorrect: false, label: "D" }],
            damage: 50, type: 'api', explanation: "Kebalikan turunan."
        },
        {
            mapel: "mtk", materi: "Kalkulus",
            question: "Limit x mendekati 0 untuk sin(x)/x adalah?",
            options: [{ text: "0", isCorrect: false, label: "A" }, { text: "1", isCorrect: true, label: "B" }, { text: "Tak hingga", isCorrect: false, label: "C" }, { text: "-1", isCorrect: false, label: "D" }],
            damage: 50, type: 'petir', explanation: "Teorema limit dasar kalkulus."
        },
        {
            mapel: "mtk", materi: "Kalkulus",
            question: "Turunan dari konstanta (angka saja) adalah?",
            options: [{ text: "1", isCorrect: false, label: "A" }, { text: "0", isCorrect: true, label: "B" }, { text: "Konstanta itu sendiri", isCorrect: false, label: "C" }, { text: "x", isCorrect: false, label: "D" }],
            damage: 35, type: 'es', explanation: "Turunan angka tanpa variabel adalah nol."
        }
    ],

    "umum": [
        // --- MATERI: SEJARAH ---
        {
            mapel: "umum", materi: "Sejarah",
            question: "Kerajaan Hindu tertua di Indonesia adalah?",
            options: [{ text: "Majapahit", isCorrect: false, label: "A" }, { text: "Kutai", isCorrect: true, label: "B" }, { text: "Tarumanegara", isCorrect: false, label: "C" }, { text: "Sriwijaya", isCorrect: false, label: "D" }],
            damage: 25, type: 'api', explanation: "Kutai Martadipura (Abad ke-4)."
        },
        {
            mapel: "umum", materi: "Sejarah",
            question: "Siapa nama Bapak Proklamator Indonesia?",
            options: [{ text: "Soeharto", isCorrect: false, label: "A" }, { text: "Ir. Soekarno", isCorrect: true, label: "B" }, { text: "B.J. Habibie", isCorrect: false, label: "C" }, { text: "Jendral Sudirman", isCorrect: false, label: "D" }],
            damage: 15, type: 'es', explanation: "Bung Karno dan Bung Hatta."
        },
        {
            mapel: "umum", materi: "Sejarah",
            question: "Sumpah Pemuda diikrarkan pada tanggal?",
            options: [{ text: "28 Oktober 1928", isCorrect: true, label: "A" }, { text: "10 November 1945", isCorrect: false, label: "B" }, { text: "17 Agustus 1945", isCorrect: false, label: "C" }, { text: "1 Juni 1945", isCorrect: false, label: "D" }],
            damage: 20, type: 'petir', explanation: "Hari Sumpah Pemuda."
        },
        {
            mapel: "umum", materi: "Sejarah",
            question: "Organisasi Budi Utomo didirikan pada tahun?",
            options: [{ text: "1908", isCorrect: true, label: "A" }, { text: "1928", isCorrect: false, label: "B" }, { text: "1945", isCorrect: false, label: "C" }, { text: "1912", isCorrect: false, label: "D" }],
            damage: 30, type: 'api', explanation: "Awal Kebangkitan Nasional."
        },
        // --- MATERI: GEOGRAFI ---
        {
            mapel: "umum", materi: "Geografi",
            question: "Benua terbesar di dunia adalah?",
            options: [{ text: "Afrika", isCorrect: false, label: "A" }, { text: "Asia", isCorrect: true, label: "B" }, { text: "Eropa", isCorrect: false, label: "C" }, { text: "Amerika", isCorrect: false, label: "D" }],
            damage: 15, type: 'es', explanation: "Asia adalah benua terluas."
        },
        {
            mapel: "umum", materi: "Geografi",
            question: "Negara tetangga yang berbatasan darat dengan Kalimantan adalah?",
            options: [{ text: "Singapura", isCorrect: false, label: "A" }, { text: "Malaysia", isCorrect: true, label: "B" }, { text: "Thailand", isCorrect: false, label: "C" }, { text: "Filipina", isCorrect: false, label: "D" }],
            damage: 20, type: 'petir', explanation: "Malaysia (Sarawak dan Sabah)."
        },
        {
            mapel: "umum", materi: "Geografi",
            question: "Danau vulkanik terbesar di dunia yang ada di Indonesia?",
            options: [{ text: "Danau Toba", isCorrect: true, label: "A" }, { text: "Danau Singkarak", isCorrect: false, label: "B" }, { text: "Danau Poso", isCorrect: false, label: "C" }, { text: "Danau Batur", isCorrect: false, label: "D" }],
            damage: 20, type: 'api', explanation: "Terletak di Sumatera Utara."
        },
        // --- MATERI: PKN ---
        {
            mapel: "umum", materi: "PKN",
            question: "Dasar negara Indonesia adalah?",
            options: [{ text: "UUD 1945", isCorrect: false, label: "A" }, { text: "Pancasila", isCorrect: true, label: "B" }, { text: "Tap MPR", isCorrect: false, label: "C" }, { text: "Perpres", isCorrect: false, label: "D" }],
            damage: 15, type: 'es', explanation: "Pancasila adalah ideologi dan dasar negara."
        },
        {
            mapel: "umum", materi: "PKN",
            question: "Lambang sila ke-3 (Persatuan Indonesia) adalah?",
            options: [{ text: "Bintang", isCorrect: false, label: "A" }, { text: "Pohon Beringin", isCorrect: true, label: "B" }, { text: "Rantai", isCorrect: false, label: "C" }, { text: "Padi Kapas", isCorrect: false, label: "D" }],
            damage: 20, type: 'petir', explanation: "Beringin melambangkan tempat berteduh/persatuan."
        },
        {
            mapel: "umum", materi: "PKN",
            question: "Lembaga yang berwenang membuat Undang-Undang adalah?",
            options: [{ text: "Presiden", isCorrect: false, label: "A" }, { text: "DPR", isCorrect: true, label: "B" }, { text: "MA", isCorrect: false, label: "C" }, { text: "KPK", isCorrect: false, label: "D" }],
            damage: 25, type: 'api', explanation: "DPR adalah lembaga legislatif."
        },
        // --- MATERI: SENI BUDAYA ---
        {
            mapel: "umum", materi: "Seni Budaya",
            question: "Alat musik tradisional angklung berasal dari?",
            options: [{ text: "Jawa Tengah", isCorrect: false, label: "A" }, { text: "Jawa Barat", isCorrect: true, label: "B" }, { text: "Bali", isCorrect: false, label: "C" }, { text: "Sumatera Barat", isCorrect: false, label: "D" }],
            damage: 20, type: 'es', explanation: "Angklung adalah alat musik bambu Sunda."
        },
        {
            mapel: "umum", materi: "Seni Budaya",
            question: "Batik diakui oleh UNESCO sebagai warisan dunia dari negara?",
            options: [{ text: "Malaysia", isCorrect: false, label: "A" }, { text: "Indonesia", isCorrect: true, label: "B" }, { text: "Thailand", isCorrect: false, label: "C" }, { text: "India", isCorrect: false, label: "D" }],
            damage: 15, type: 'es', explanation: "Kebanggaan Indonesia."
        },
        {
            mapel: "umum", materi: "Seni Budaya",
            question: "Lukisan Monalisa adalah karya dari?",
            options: [{ text: "Picasso", isCorrect: false, label: "A" }, { text: "Leonardo da Vinci", isCorrect: true, label: "B" }, { text: "Van Gogh", isCorrect: false, label: "C" }, { text: "Affandi", isCorrect: false, label: "D" }],
            damage: 30, type: 'api', explanation: "Pelukis Renaissance Italia."
        },
        // --- MATERI: OLAHRAGA ---
        {
            mapel: "umum", materi: "Olahraga",
            question: "Jumlah pemain dalam satu tim sepak bola adalah?",
            options: [{ text: "9", isCorrect: false, label: "A" }, { text: "11", isCorrect: true, label: "B" }, { text: "10", isCorrect: false, label: "C" }, { text: "6", isCorrect: false, label: "D" }],
            damage: 10, type: 'es', explanation: "Kesebelasan."
        },
        {
            mapel: "umum", materi: "Olahraga",
            question: "Induk organisasi bulu tangkis dunia adalah?",
            options: [{ text: "FIFA", isCorrect: false, label: "A" }, { text: "BWF", isCorrect: true, label: "B" }, { text: "FIBA", isCorrect: false, label: "C" }, { text: "IAAF", isCorrect: false, label: "D" }],
            damage: 25, type: 'petir', explanation: "Badminton World Federation."
        },
        {
            mapel: "umum", materi: "Olahraga",
            question: "Lari jarak pendek disebut juga?",
            options: [{ text: "Marathon", isCorrect: false, label: "A" }, { text: "Sprint", isCorrect: true, label: "B" }, { text: "Jogging", isCorrect: false, label: "C" }, { text: "Estafet", isCorrect: false, label: "D" }],
            damage: 15, type: 'es', explanation: "Lari cepat jarak pendek."
        },
        // --- MATERI: TEKNOLOGI ---
        {
            mapel: "umum", materi: "Teknologi",
            question: "Otak dari sebuah komputer disebut?",
            options: [{ text: "Monitor", isCorrect: false, label: "A" }, { text: "CPU", isCorrect: true, label: "B" }, { text: "Mouse", isCorrect: false, label: "C" }, { text: "Keyboard", isCorrect: false, label: "D" }],
            damage: 20, type: 'petir', explanation: "Central Processing Unit."
        },
        {
            mapel: "umum", materi: "Teknologi",
            question: "Kepanjangan dari WWW adalah?",
            options: [{ text: "World Wide Web", isCorrect: true, label: "A" }, { text: "World Web Wide", isCorrect: false, label: "B" }, { text: "Web Wide World", isCorrect: false, label: "C" }, { text: "Wide World Web", isCorrect: false, label: "D" }],
            damage: 15, type: 'es', explanation: "Sistem informasi internet."
        },
        {
            mapel: "umum", materi: "Teknologi",
            question: "Pendiri Microsoft adalah?",
            options: [{ text: "Steve Jobs", isCorrect: false, label: "A" }, { text: "Bill Gates", isCorrect: true, label: "B" }, { text: "Mark Zuckerberg", isCorrect: false, label: "C" }, { text: "Elon Musk", isCorrect: false, label: "D" }],
            damage: 20, type: 'es', explanation: "Tokoh teknologi legendaris."
        },
        {
            mapel: "umum", materi: "Teknologi",
            question: "Kecerdasan buatan dikenal dengan istilah?",
            options: [{ text: "VR", isCorrect: false, label: "A" }, { text: "AI", isCorrect: true, label: "B" }, { text: "AR", isCorrect: false, label: "C" }, { text: "IoT", isCorrect: false, label: "D" }],
            damage: 25, type: 'petir', explanation: "Artificial Intelligence."
        }
    ]
};