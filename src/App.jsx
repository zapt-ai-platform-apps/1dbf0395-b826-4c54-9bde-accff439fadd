import { onMount } from 'solid-js';
import { createEvent } from './supabaseClient';

function App() {
  onMount(() => {
    // Focus on the main content for accessibility
    const mainContent = document.getElementById('main-content');
    mainContent && mainContent.focus();
  });

  return (
    <div class="h-full bg-gradient-to-br from-purple-100 to-blue-100 p-4" dir="rtl">
      <div class="max-w-6xl mx-auto h-full">
        <header class="flex justify-between items-center mb-8">
          <h1 class="text-4xl font-bold text-purple-600">تبادل المعلومات التقنية</h1>
          <a
            href="https://www.zapt.ai"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            aria-label="تعرف على ZAPT"
          >
            تعرف على ZAPT
          </a>
        </header>

        <main id="main-content" tabIndex="-1" class="bg-white p-6 rounded-lg shadow-md mb-8">
          <div class="space-y-6 text-center text-lg text-gray-800">
            <section aria-labelledby="telegram-channel">
              <h3 id="telegram-channel" class="font-semibold text-xl text-purple-600 mb-2">
                قناة تبادل المعلومات التقنية على Telegram
              </h3>
              <p>
                <a
                  href="https://t.me/echangetec"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-500 hover:underline cursor-pointer"
                  aria-label="اضغط هنا للانضمام إلى القناة على Telegram"
                >
                  اضغط هنا للانضمام إلى القناة
                </a>
              </p>
            </section>

            <section aria-labelledby="telegram-group">
              <h3 id="telegram-group" class="font-semibold text-xl text-purple-600 mb-2">
                مجموعتنا على Telegram
              </h3>
              <p>
                <a
                  href="https://t.me/Youness_be"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-500 hover:underline cursor-pointer"
                  aria-label="اضغط هنا للانضمام إلى المجموعة على Telegram"
                >
                  اضغط هنا للانضمام إلى المجموعة
                </a>
              </p>
            </section>

            <section aria-labelledby="youtube-channel">
              <h3 id="youtube-channel" class="font-semibold text-xl text-purple-600 mb-2">
                قناتنا على YouTube تبادل المعلومات التقنية
              </h3>
              <p>
                <a
                  href="https://www.youtube.com/@echangetec"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-500 hover:underline cursor-pointer"
                  aria-label="اضغط هنا للاشتراك في القناة على YouTube"
                >
                  اضغط هنا للاشتراك في القناة
                </a>
              </p>
            </section>

            <section aria-labelledby="facebook-group">
              <h3 id="facebook-group" class="font-semibold text-xl text-purple-600 mb-2">
                مجموعتنا على Facebook
              </h3>
              <p>
                <a
                  href="https://www.facebook.com/groups/1802881706649541/?ref=share"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-500 hover:underline cursor-pointer"
                  aria-label="اضغط هنا للانضمام إلى المجموعة على Facebook"
                >
                  اضغط هنا للانضمام إلى المجموعة
                </a>
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;