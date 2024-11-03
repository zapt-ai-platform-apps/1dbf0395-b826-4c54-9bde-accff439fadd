import { Show } from 'solid-js';
import { createEvent } from './supabaseClient';

function App() {
  return (
    <div class="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4" dir="rtl">
      <div class="max-w-6xl mx-auto h-full">
        <div class="flex justify-between items-center mb-8">
          <h1 class="text-4xl font-bold text-purple-600">New App</h1>
          <a
            href="https://www.zapt.ai"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          >
            تعرف على ZAPT
          </a>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 class="text-2xl font-bold mb-4 text-purple-600 text-center">تبادل المعلومات التقنية</h2>
          <div class="space-y-6 text-center text-lg text-gray-800">
            <p>
              قناة تبادل المعلومات التقنية على Telegram
              <br />
              <a
                href="https://t.me/echangetec"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-500 hover:underline"
              >
                https://t.me/echangetec
              </a>
            </p>

            <p>
              مجموعتنا على Telegram
              <br />
              <a
                href="https://t.me/Youness_be"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-500 hover:underline"
              >
                https://t.me/Youness_be
              </a>
            </p>

            <p>
              قناتنا على YouTube تبادل المعلومات التقنية
              <br />
              <a
                href="https://www.youtube.com/@echangetec"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-500 hover:underline"
              >
                https://www.youtube.com/@echangetec
              </a>
            </p>

            <p>
              مجموعتنا على Facebook
              <br />
              <a
                href="https://www.facebook.com/groups/1802881706649541/?ref=share"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-500 hover:underline"
              >
                https://www.facebook.com/groups/1802881706649541/?ref=share
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;