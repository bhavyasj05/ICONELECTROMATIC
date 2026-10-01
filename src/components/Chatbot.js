/**
 * Chatbot Component — ICON ELECTROMATIC
 * Requirement: When asked questions -> no detailed information disclosed,
 * only brief answer and directs to Contact Us.
 */

const BOT_NAME = 'ICON Engineering Assistant';

function getBotBriefReply(userText) {
  const query = userText.toLowerCase();

  if (query.includes('price') || query.includes('cost') || query.includes('quote') || query.includes('rfq')) {
    return 'Pricing depends on component quantities, frequency specs, and screening requirements. To obtain an official commercial quotation, please send us an inquiry via our contact form.';
  }
  if (query.includes('amplifier') || query.includes('lna') || query.includes('gain')) {
    return 'We supply high-linearity power amplifiers and ultra-low noise LNAs spanning DC to 86 GHz. For detailed data sheets and pinout drawings, please reach out to our engineering team.';
  }
  if (query.includes('filter') || query.includes('waveguide') || query.includes('cavity')) {
    return 'Our cavity filters and waveguide components offer exceptional Q-factor and high rejection. For custom frequency tuning and insertion loss curves, please contact our specialists.';
  }
  if (query.includes('delivery') || query.includes('lead time') || query.includes('stock')) {
    return 'Standard in-stock catalog models typically dispatch within 24 to 48 hours across India and internationally. For current stock verification on specific part numbers, please contact sales.';
  }
  if (query.includes('rohs') || query.includes('iso') || query.includes('certif')) {
    return 'ICON Electromatic is ISO 9001:2015 certified, and all distributed components comply strictly with RoHS and relevant Mil-Spec standards. Certificates of Conformance are provided upon request.';
  }
  if (query.includes('about') || query.includes('company') || query.includes('who are you')) {
    return 'ICON Electromatic Private Limited is an engineering distributor established in 2009 in Bengaluru, providing advanced RF, microwave, and Hi-Rel components across India, Israel, Singapore, and USA.';
  }

  // Generic fallback: brief & redirect
  return 'Thank you for your inquiry. For specific technical parameters, design integration assistance, and pricing, please connect directly with our engineering department.';
}

export function renderChatbot() {
  return `
    <div class="chatbot-launcher-container" id="chatbot-launcher-container">
      <button class="chatbot-launcher-btn" id="chatbot-launcher-btn" aria-label="Open engineering assistant">
        <i class="fa-solid fa-headset" id="chatbot-fab-icon"></i>
        <span class="chatbot-online-indicator"></span>
      </button>
    </div>

    <div class="chatbot-modal" id="chatbot-modal" role="dialog" aria-label="ICON Assistant">
      <div class="chat-modal-header">
        <div class="chat-avatar"><i class="fa-solid fa-microchip"></i></div>
        <div class="chat-header-details">
          <h4>${BOT_NAME}</h4>
          <p>Live Engineering Dispatch · Brief Inquiries</p>
        </div>
        <button class="chat-close-btn" id="chatbot-close-btn" aria-label="Close Assistant">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="chat-modal-body" id="chatbot-messages-body">
        <div class="chat-bubble-bot">
          👋 Welcome to <strong>ICON ELECTROMATIC</strong>. I can assist you with brief questions regarding our RF & microwave component portfolio. 
          <br/><br/>
          <em>Note: In accordance with company policy, detailed technical datasheets and commercial pricing are provided directly by our application engineers.</em>
          <br/>
          <button class="chat-action-badge" data-route="/contact" style="margin-top:10px;">
            <i class="fa-solid fa-paper-plane"></i> Send Us a Message
          </button>
        </div>
      </div>

      <div class="chat-quick-chips">
        <button class="chat-chip" data-q="Request a Quote">Request Quote</button>
        <button class="chat-chip" data-q="RF Amplifiers specifications">RF Amplifiers</button>
        <button class="chat-chip" data-q="Lead times and delivery">Lead Times</button>
        <button class="chat-chip" data-q="RoHS & ISO compliance">Compliance</button>
      </div>

      <div class="chat-input-row">
        <input type="text" id="chatbot-input-field" placeholder="Ask a brief question..." autocomplete="off" />
        <button class="chat-send-btn" id="chatbot-send-action" aria-label="Send">
          <i class="fa-solid fa-paper-plane"></i>
        </button>
      </div>
    </div>
  `;
}

export function initChatbot() {
  const launcher = document.getElementById('chatbot-launcher-btn');
  const modal = document.getElementById('chatbot-modal');
  const closeBtn = document.getElementById('chatbot-close-btn');
  const input = document.getElementById('chatbot-input-field');
  const sendBtn = document.getElementById('chatbot-send-action');
  const body = document.getElementById('chatbot-messages-body');

  if (!launcher || !modal) return;

  function toggleModal() {
    modal.classList.toggle('open');
    if (modal.classList.contains('open') && input) {
      input.focus();
    }
  }

  launcher.addEventListener('click', toggleModal);
  closeBtn?.addEventListener('click', () => modal.classList.remove('open'));

  function handleSend(text) {
    const query = text || input?.value.trim();
    if (!query) return;

    // Add user bubble
    const userBubble = document.createElement('div');
    userBubble.className = 'chat-bubble-user';
    userBubble.textContent = query;
    body.appendChild(userBubble);

    if (input) input.value = '';
    body.scrollTop = body.scrollHeight;

    // Simulate brief typing delay
    setTimeout(() => {
      const reply = getBotBriefReply(query);
      const botBubble = document.createElement('div');
      botBubble.className = 'chat-bubble-bot';
      botBubble.innerHTML = `
        ${reply}
        <br/>
        <button class="chat-action-badge" data-route="/contact" style="margin-top:8px;">
          <i class="fa-solid fa-paper-plane"></i> Contact Sales Team &rarr;
        </button>
      `;
      body.appendChild(botBubble);
      body.scrollTop = body.scrollHeight;

      // Ensure newly added route buttons work
      botBubble.querySelector('[data-route]')?.addEventListener('click', () => {
        window.location.hash = '/contact';
        modal.classList.remove('open');
      });
    }, 400);
  }

  sendBtn?.addEventListener('click', () => handleSend());
  input?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSend();
  });

  // Quick chips
  document.querySelectorAll('.chat-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const q = chip.getAttribute('data-q');
      handleSend(q);
    });
  });
}
