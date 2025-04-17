<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BLOCK-FACE AI</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="style.css" />
</head>
</head>


  <!-- Header -->
   
  <!-- Header -->
  <header class="bg-gradient-to-r from-indigo-700 to-purple-700 text-white p-8 text-center">
    <h1 class="text-5xl font-extrabold">Block-Face AI</h1>
    <p class="mt-3 text-lg">Deepfake & Fake Identity Detection using Facial Recognition</p>
    <p class="mt-1 text-sm italic">By Team: Technoteam (Mudrika, Priyanshu, Sweety, Himanshu)</p>
  </header>

  
  
  <!-- Stylish Separated Nav Buttons -->
<nav class="flex justify-center p-4 gap-4 bg-transparent">
  <a href="index.html" class="px-5 py-2 rounded-xl bg-indigo-600 text-white shadow-md hover:bg-indigo-700 transition">
    Home
  </a><br>
  <a href="about.html" class="px-5 py-2 rounded-xl bg-indigo-500 text-white shadow-md hover:bg-indigo-600 transition">
    About
  </a><br>
  <a href="service.html" class="px-5 py-2 rounded-xl bg-indigo-500 text-white shadow-md hover:bg-indigo-600 transition">
    Service
  </a><br>
  <a href="project.html" class="px-5 py-2 rounded-xl bg-indigo-500 text-white shadow-md hover:bg-indigo-600 transition">
    Project
  </a><br>
</nav>
<!--problem&solution-->
<title>Problem & Solution</title>
<div class="section">
  <h2>Problem Statement & Our Solution</h2>
  <div class="columns">
    <!-- Problem Column -->
    <div class="column">
      <h3>Challenges in Current Systems</h3>
      <ul>
        <li><strong>Ineffective Authentication:</strong> Create a facial recognition system for secure authentication and access control.</li>
        <li><strong>Media Manipulation:</strong> It's difficult to detect deepfakes and other fake visual content.</li>
        <li><strong>Privacy Concerns:</strong> Users are increasingly worried about how their biometric and personal data is stored or shared.</li>
      </ul>
    </div>

    <!-- Solution Column -->
    <div class="column solution">
      <h3>Our System: A Smarter, Safer Solution</h3>
      <ul>
        <li><strong>AI-Powered Detection:</strong> Advanced deep learning models and face recognition to detect deepfakes and identity fraud.</li>
        <li><strong>Multi-Factor Security:</strong> Combines facial authentication, fingerprint verification, and smart analysis.</li>
        <li><strong>Privacy First:</strong> Data is encrypted, stored securely, and never shared without consent.</li>
      </ul>
    </div>
  </div>
</div>

 <!-- Introduction Section -->
 <div>
  <section class="overview-section">
    <h2 class="overview-title">Project Overview</h2>
    <p class="overview-text">
      Block-Face AI is a cutting-edge hackathon solution to identify fake identities using real-time facial recognition, AI-powered clone detection, and password security. Our mission is to combat deepfakes and enhance digital trust.
    </p>
  </section>
</div>

<br>
</section>
<div>
  
   <section class="cards">
    <div class="card">
      <h3>Introduction</h3>
      <p>A platform for detecting fake identities and combating fraud using AI-powered facial recognition.</p>
    </div>
    <div class="card">
      <h3>Applications</h3>
      <ul>
        <li>Banking security</li>
        <li>E-commerce verification</li>
        <li>Access control in sensitive areas</li>
        <li>Educational and immigration systems</li>
      </ul>
    </div>
    <div class="card">
      <h3>Key Features</h3>
      <ul>
        <li>Clone detection and face matching</li>
        <li>AI-driven fraud prevention</li>
        <li>User-friendly and secure interface</li>
      </ul>
    </div>
    <div class="card">
      <h3>Future Scope</h3>
      <p>Real-time analytics, IoT integration, and improved deepfake detection models.</p>
    </div>
  </div>
  </section>
<!-- Features Section -->
<section class="features-section">
  <h2 class="features-title">Key Features</h2>
  <ul class="features-list">
    <li>Face match authentication with live webcam</li>
    <li>Fake/clone face detection using AI models</li>
    <li>Password strength checker & secure registration</li>
    <li>File upload & media analysis</li>
    <li>Dark mode support and responsive UI</li>
  </ul>
</section>
<h2>System Architecture</h2>

  <div class="architecture">
    <!-- Frontend -->
    <div class="card">
      <h3>Frontend</h3>
      <p>Handles user interactions such as media uploads and displays real-time verification results in a secure interface.</p>
    </div>

    <!-- Backend -->
    <div class="card">
      <h3>Backend</h3>
      <p>Manages AI-powered image/video processing, handles authentication logic, and ensures secure data storage and API communication.</p>
    </div>

    <!-- AI Models -->
    <div class="card">
      <h3>AI Models</h3>
      <p>Integrates models like <strong>FaceNet</strong>, <strong>DeepFace</strong>, or custom deep learning models for face detection, comparison, and deepfake analysis.</p>
    </div>
  </div>
<br>
  <div class="section-container">
    <h2>Challenges & Future Scope</h2>

    <div class="grid">
      <!-- Challenges -->
      <div class="box">
        <h3>Current Challenges</h3>
        <ul>
          <li>Detecting highly sophisticated and realistic deepfakes.</li>
          <li>Improving AI model accuracy across diverse datasets and lighting conditions.</li>
          <li>Balancing speed and performance for real-time applications.</li>
          <li>Ensuring data privacy and secure processing at scale.</li>
        </ul>
      </div>
    
      <!-- Future Scope -->
      <div class="box">
        <h3>Future Enhancements</h3>
        <ul>
          <li>Real-time fraud detection dashboards with AI analytics.</li>
          <li>Integration with IoT-enabled smart security systems (e.g., door cameras, smart locks).</li>
          <li>Cross-platform verification with mobile and wearable devices.</li>
          <li>Federated learning for privacy-preserving model training.</li>
        </ul>
      </div>
    </div>
  </div>

  
<h1>Basic AI Methods for Image Swapping & Manipulation</h1>

  <div class="features">
    <div class="card">
      <h3>Generative Adversarial Networks (GANs)</h3>
      <p>GANs generate realistic images and videos. Tools like StyleGAN and DeepFake use them for face swapping and manipulation.</p>
    </div>

    <div class="card">
      <h3>Autoencoders</h3>
      <p>Used for compressing and reconstructing images, making them helpful for transferring facial features across images.</p>
    </div>

    <div class="card">
      <h3>Image-to-Image Translation</h3>
      <p>Models like Pix2Pix and CycleGAN convert images between domains, such as sketches to real faces.</p>
    </div>

    <div class="card">
      <h3>Face Alignment & Feature Extraction</h3>
      <p>Libraries like Dlib and OpenCV help detect and align faces, ensuring precise manipulation.</p>
    </div>

    <div class="card">
      <h3>Deep Learning Models</h3>
      <p>CNNs are core to face detection, segmentation, and feature extraction used in image editing tasks.</p>
    </div>

    <div class="card">
      <h3>One-Shot Learning</h3>
      <p>Techniques like GHOST allow face swaps with just one image, enabling fast and efficient manipulation.</p>
    </div>
  </div>
    


 

  <!-- Upload Media -->
  <main class="max-w-5xl mx-auto my-10 bg-white p-6 rounded-xl shadow-lg ">
    <h2 class="text-2xl font-semibold text-indigo-700 mb-4">Upload Media for Analysis</h2>
    <input type="file" id="mediaUpload" accept="image/*,video/*" class="w-full mb-4" />
    <button onclick="analyzeMedia()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg">Analyze</button>
    <div id="resultBox" class="mt-6 p-4 border rounded hidden bg-gray-50"></div>
  </main>

</section>

  
  
</section>

 <!-- Contact Section -->
 <section class="max-w-5xl mx-auto p-6 mt-6 bg-white rounded-xl shadow-md">
  <h2 class="text-2xl font-semibold text-indigo-700 mb-4 ">Contact</h2>
  <p>Email: <a href="mudrikapatel04@gamil.com" class="text-blue-600 underl">mudrikapatel04@gmail.com</a></p>
  <p>GitHub: <a href="https://github.com/Mudrikapatel" class="text-blue-600 underline" target="_blank">https://github.com/Mudrikapatel</a></p>
  <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" class="text-blue-600 underline" target="_blank">www.linkedin.com/in/mudrika-patel-723b97253</a></p>
</section>
<br>
<div class="conclusion-section">
  <h2>Conclusion</h2>
  <p>Our AI-driven platform offers a secure and intelligent solution to combat digital identity fraud. By leveraging the power of facial recognition and deepfake detection technologies, we aim to redefine safety in online interactions.</p>

  <ul class="benefits-list">
    <li>✅ Combating fraud effectively using AI technologies.</li>
    <li>✅ Enhancing user trust and safety in digital transactions.</li>
    <li>✅ Contributing to the broader fight against identity fraud and misuse.</li>
  </ul>
</div>



<!-- Team Section -->
<section class="team-section">
  <h2>Meet the Team</h2>
  <div class="team-row">
    <div class="team-member">
      <img src="img copy.jpg" alt="Mudrika">
      <h3>Mudrika</h3>
      <p>2nd year B.Tech</p>
      <p>Student</p>
     
    </div>
    <div class="team-member">
      <img src="WhatsApp Image 2025-04-15 at 01.28.32_ac1275f0.jpg" alt="Priyanshu">
      <h3>Priyanshu</h3>
      <p>2nd year B.Tech</p>
      <p>Student</p>
    </div>
    <div class="team-member">
      <img src="WhatsApp Image 2025-04-15 at 09.57.25_58a6f4e7.jpg" alt="Sweety">
      <h3>Sweety</h3>
      <p>2nd year B.Tech</p>
      <p>Student</p>
      
    </div>
    <div class="team-member">
      <img src="Screenshot_15-4-2025_12727_www.instagram.com.jpeg" alt="Himanshu">
      <h3>Himanshu</h3>
      <p>2nd year B.Tech</p>
      <p>Student</p>
    
    </div>
  </div>
</div>
</section>

  <!-- Footer -->
</div>
<div class="footer-quick-links">
  <p class="section-title text-white h5 mb-4">Quick Links</p>
  <div class="quick-links-row">
    <a class="btn btn-link" href="#">About Us</a>
    <a class="btn btn-link" href="#">Contact Us</a>
    <a class="btn btn-link" href="#">Privacy Policy</a>
    <a class="btn btn-link" href="#">Terms & Condition</a>
    <a class="btn btn-link" href="#">Career</a>
  </div>
</div>

<div class="gallery-container bg-gray-100 rounded-xl">
  <div class="gallery-row">
    <img src="face detection.png" alt="Face Detection">
    <img src="password.png" alt="Password">
    <img src="e-commerce.png" alt="E-commerce">
    <img src="email.png" alt="Email">
    <img src="never password.png" alt="Security Tip">
  </div>
</div>


<!-- Contact & Footer -->
<footer class="bg-gray-100 mt-10 py-6 text-center text-sm text-gray-600">
  <p>Have questions? Contact us at <a href="mailto:technoteam@email.com" class="text-blue-600 underline">technoteam@email.com</a></p>
  <p class="mt-2">&copy; 2025 Technoteam. Hackathon Presentation Page.</p>
</footer>
  
  <footer class="text-center text-sm text-gray-600 mt-10 mb-4">
    <button onclick="togglePrivacyModal()" class="hover:underline">Privacy & Ethical Considerations</button>
    <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
    Designed By <a class="border-bottom" href="">Mudrika Patel</a>
  </div>
  <div class="col-md-6 text-center text-md-end">
      <div class="footer-menu">
          <a href="">Home</a>
          <a href="">Cookies</a>
          <a href="">Help</a>
          <a href="">FQAs</a>
      </div>
  </div>
</div>
</div>
</div>
</div>
  </footer>

  <!-- Modal -->
  <div id="privacyModal" class="fixed inset-0 bg-black bg-opacity-60 hidden flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-xl w-11/12 md:w-2/3 text-center shadow-lg">
      <h3 class="text-xl font-bold mb-2">Privacy & Ethics</h3>
      <p class="mb-4 text-gray-700">We use AI responsibly. Your data is processed locally and never stored. We comply with strict privacy standards to ensure trust and transparency.</p>
      <button onclick="togglePrivacyModal()" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Close</button>
    </div>
  </div>
  <script src="app.js"></script>
  <script src="script.js"></script>
</body>
</html>
