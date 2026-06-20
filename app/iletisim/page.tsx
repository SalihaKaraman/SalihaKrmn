export default function Iletisim() {
  return (
    <main className="flex-1 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <div className="space-y-8">
            <div>
              <span className="text-xs text-violet-400 font-mono tracking-widest">✦ YENİ FIRSATLARA AÇIK</span>
              <h1 className="text-5xl font-bold text-white leading-tight mt-4 mb-6">
                Birlikte Harika <br/>Bir Şey <br/>Yapalım.
              </h1>
              <p className="text-slate-300 leading-relaxed text-lg">
                Belirli bir projeniz olsun veya sadece teknoloji hakkında sohbet etmek isteyip isteyin, her zaman mühendisler ve yenilikçilerle bağlantı kurmaya açığım.
              </p>
            </div>

            {/* Contact Card */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 space-y-6">
              <div>
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="font-mono text-xs text-slate-500 mb-4">bash — iletisiminfo</div>
              </div>

              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-slate-500">✉</span>
                  <div>
                    <div className="text-slate-400">E-POSTA</div>
                    <a href="mailto:saliha@example.com" className="text-violet-400 hover:text-violet-300">
                      saliha@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-slate-500">📍</span>
                  <div>
                    <div className="text-slate-400">KONUM</div>
                    <div className="text-violet-400">Türkiye / Uzaktan</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-slate-500">🔗</span>
                  <div>
                    <div className="text-slate-400">SOSYAL MEDYA</div>
                    <div className="space-y-1">
                      <a href="https://github.com/SalihaKaraman" target="_blank" rel="noopener noreferrer" className="block text-violet-400 hover:text-violet-300">
                        GitHub
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block text-violet-400 hover:text-violet-300">
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Collaboration CTA */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
              <h3 className="font-bold text-white mb-3">İş birliği yapmaya hazır mısın?</h3>
              <p className="text-slate-400 text-sm">
                React, TypeScript ve yüksek performanslı backend sistemlerde uzmanım. Bana bir satır yaz ve bir sonraki başarınızı birlikte tartışalım.
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <form
              action="https://formsubmit.co/your-email@example.com"
              method="POST"
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 space-y-6"
            >
              {/* Full Name & Email in 2 columns */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 font-mono tracking-widest mb-2">AD SOYAD</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Adınız Soyadınız"
                    className="w-full bg-slate-900/50 border border-slate-600 rounded px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-violet-500 transition font-mono text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 font-mono tracking-widest mb-2">E-POSTA</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="ad@sirket.com"
                    className="w-full bg-slate-900/50 border border-slate-600 rounded px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-violet-500 transition font-mono text-sm"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs text-slate-400 font-mono tracking-widest mb-2">KONU</label>
                <select
                  name="subject"
                  required
                  className="w-full bg-slate-900/50 border border-slate-600 rounded px-4 py-3 text-slate-100 focus:outline-none focus:border-violet-500 transition font-mono text-sm"
                >
                  <option value="">Bir konu seç</option>
                  <option value="Proje İş Birliği">Proje İş Birliği</option>
                  <option value="Freelance Fırsat">Freelance Fırsat</option>
                  <option value="Tam Zamanlı Pozisyon">Tam Zamanlı Pozisyon</option>
                  <option value="Teknik Danışmanlık">Teknik Danışmanlık</option>
                  <option value="Konuşma Davetiyesi">Konuşma Davetiyesi</option>
                  <option value="Diğer">Diğer</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs text-slate-400 font-mono tracking-widest mb-2">MESAJ</label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Projeniz veya sorunuz hakkında bana bilgi verin..."
                  className="w-full bg-slate-900/50 border border-slate-600 rounded px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-violet-500 transition font-mono text-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-violet-500 hover:bg-violet-600 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
              >
                Mesajı Gönder 📨
              </button>

              <div className="text-xs text-slate-500 text-center">
                Ortalama cevap süresi: ~ 12 saat
              </div>
            </form>
          </div>
        </div>

        {/* Footer Map/Background Element */}
        <div className="mt-20 pt-20 border-t border-slate-700">
          <div className="text-center text-slate-500 font-mono text-xs">
            ◇ KÜRESEL OPS: HER YERDE • 24/7 •
          </div>
        </div>
      </div>
    </main>
  )
}
