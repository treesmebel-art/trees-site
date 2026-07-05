import express from "express";
import cors from "cors";


const app = express();
const PORT = 3001;

const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

app.use(cors());
app.use(express.json());

app.post("/send-order", async (req, res) => {
  try {
    const { name, phone, items, total } = req.body;

    const itemsText = items
      .map((item, index) => {
        return `${index + 1}. ${item.name}
Количество: ${item.quantity || 1}
Цвет обивки: ${item.selectedUpholstery || "не выбран"}
Каркас: ${item.selectedWood || "не выбран"}
Цена: ${item.price}`;
      })
      .join("\n\n");

    const message = `
🛒 Новый заказ с сайта ТРЭС

👤 Имя: ${name}
📞 Телефон: ${phone}

📦 Товары:
${itemsText}

💰 Итого: ${total}
`;

    const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    await globalThis.fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    });

    res.json({ success: true });
  } catch (error) {
    console.error("Ошибка отправки в Telegram:", error);
    res.status(500).json({ success: false });
  }
});

app.post("/send-consultation", async (req, res) => {
  try {
    const { name, phone } = req.body;

    const message = `
💬 Новая заявка на консультацию

👤 Имя: ${name}
📞 Телефон: ${phone}
`;

    const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    await globalThis.fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    });

    res.json({ success: true });
  } catch (error) {
    console.error("Ошибка отправки заявки:", error);
    res.status(500).json({ success: false });
  }
});
app.post("/send-chat", async (req, res) => {
  try {
    const { name, phone, message } = req.body;

    const text = `
💬 Новое сообщение из чата сайта ТРЭС

👤 Имя: ${name || "не указано"}
📞 Телефон: ${phone || "не указан"}

💬 Сообщение:
${message}
`;

    const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    await globalThis.fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
      }),
    });

    res.json({ success: true });
  } catch (error) {
    console.error("Ошибка отправки чата:", error);
    res.status(500).json({ success: false });
  }
});
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});