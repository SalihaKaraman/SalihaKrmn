export default function Hakkimda() {
  return (
    <main className="flex-1">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Hakkımda</h1>

          {/* Kişisel Tanıtım */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Kimim?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Merhaba, ben Saliha Karaman. Matematik eğitimimle şekillenen analitik bakış açımı, bilgisayar bilimleri ve eğitim programları akademik yolculuğumla zenginleştiriyorum.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Akademiye doğru ilerlerken aynı zamanda yazılım ile uğraşarak öğrenmekten vazgeçmiyorum. Bu eğitimlerle kazandığım bilgileri aktarma ve farklı ihtiyaçlara yönelik çözümler geliştirme becerimi pekiştirmeye devam ediyor.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Aynı zamanda yazılım dünyasının dinamizmi ve eğitim sektörünün gelişimi ile kendimi sürekli güncel tutmaya çalışıyorum. Güler yüzlülüğüm, enerjim ve iletişim becerimle ekiplerin bir parçası olmayı ve insanlara yardım etmeyi seviyorum.
            </p>
          </section>

          {/* Teknik Beceriler */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Teknik Beceriler</h2>
            
            <div className="mb-6">
              <h3 className="font-bold text-lg text-blue-600 mb-3">Programlama Dilleri</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Python</li>
                <li>• Java (temel seviye)</li>
                <li>• Dart (temel seviye)</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-lg text-blue-600 mb-3">Web Teknolojileri</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• HTML, CSS</li>
                <li>• Temel düzeyde web arayüz geliştirme</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-lg text-blue-600 mb-3">Veri Analizi ve Araştırma</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• SPSS</li>
                <li>• Excel</li>
                <li>• Google Sheets</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-lg text-blue-600 mb-3">Eğitim Teknolojileri</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• GeoGebra</li>
                <li>• Kahoot</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg text-blue-600 mb-3">Ofis ve İş Birliği Araçları</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Microsoft Office 365</li>
                <li>• Google Workspace</li>
              </ul>
            </div>
          </section>

          {/* Analitik ve Bilişsel Beceriler */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Analitik ve Bilişsel Beceriler</h2>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Problem çözme ve algoritmik düşünme</li>
              <li>✓ Analitik ve eleştirel düşünme</li>
            </ul>
          </section>

          {/* Profesyonel ve Sosyal Beceriler */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Profesyonel ve Sosyal Beceriler</h2>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Ekip çalışması ve etkili iletişim</li>
              <li>✓ Zaman yönetimi ve proje takibi</li>
              <li>✓ Hızlı öğrenme ve uyum sağlama</li>
              <li>✓ Yenilikçi düşünme ve sürekli gelişim isteği</li>
            </ul>
          </section>

          {/* Yabancı Dil Bilgisi */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Yabancı Dil Bilgisi</h2>
            <div className="space-y-3 text-gray-700">
              <p><span className="font-semibold">Okuma:</span> B1 seviyesi</p>
              <p><span className="font-semibold">Dinleme:</span> B1 seviyesi</p>
              <p><span className="font-semibold">Konuşma:</span> A2 seviyesi</p>
            </div>
          </section>

          {/* Sertifikalar ve Eğitim */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Sertifikalar ve Eğitim</h2>
            <div className="space-y-6">
              
              <div className="border-l-4 border-blue-600 pl-4 pb-6 border-b border-gray-200">
                <h3 className="font-bold text-lg mb-2">Mobil Uygulama Geliştirme Atölyesi (60 Saat)</h3>
                <p className="text-sm text-gray-600 mb-2">Kodluyoruz & Ford Otosan & Vehbi Koç Vakfı | Ocak 2026</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Flutter framework'ü ve Dart programlama dili kullanılarak modern mobil uygulama geliştirme</li>
                  <li>• Uygulama mimarisi, state management ve Firebase entegrasyonu pratikleri</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4 pb-6 border-b border-gray-200">
                <h3 className="font-bold text-lg mb-2">Binance TR Teknolojide Kadın Akademisi 102</h3>
                <p className="text-sm text-gray-600 mb-2">Binance TR & Wtech | 2025</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Blokzincir teknolojisinin temelleri ve Web 3.0 ekosistemi</li>
                  <li>• Dijital finans okuryazarlığı ve teknolojinin finansal dönüşümdeki rolü</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4 pb-6 border-b border-gray-200">
                <h3 className="font-bold text-lg mb-2">AI4Change Eğitim Programı (30 Saat)</h3>
                <p className="text-sm text-gray-600 mb-2">2025</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Yapay zeka araçlarının toplumsal fayda için kullanımı</li>
                  <li>• Etik yapay zeka yaklaşımları, veri setleri ve makine öğrenmesi temel prensipleri</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4 pb-6 border-b border-gray-200">
                <h3 className="font-bold text-lg mb-2">Dijital Dünya ve Siber Güvenlik</h3>
                <p className="text-sm text-gray-600 mb-2">Wtech & Ford Otosan & Vehbi Koç Vakfı | Ekim 2025</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Dijital platformlarda veri güvenliği ve siber tehdit unsurları</li>
                  <li>• Bilgi güvenliği farkındalığı ve güvenli yazılım geliştirme temelleri</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4 pb-6 border-b border-gray-200">
                <h3 className="font-bold text-lg mb-2">Yapay Zeka Çağında Lider Benim: İletişim Becerileri</h3>
                <p className="text-sm text-gray-600 mb-2">Wtech & Ford Otosan | Eylül 2025</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Etkili iletişim ve profesyonel ağ kurma (networking)</li>
                  <li>• Liderlik yaklaşımları ve takım çalışmasında duygusal zekanın kullanımı</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold text-lg mb-2">Teknolojinin Hızla Geliştiği Dünyada Benden Ne Oluru Bulmak</h3>
                <p className="text-sm text-gray-600 mb-2">Wtech & Ford Otosan | Eylül 2025</p>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Teknoloji odaklı kariyer planlama ve yetkinlik analizi</li>
                  <li>• Geleceğin mesleklerine adaptasyon ve kariyer farkındalığı</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
