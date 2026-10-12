
document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* =========================================
     FOUR OF FOUR — PREMIUM ARCHIVE
     Password: 2424
  ========================================= */

  const PASSWORD = "2424";

  const FRIENDS = {
    adrian: {
      name: "Adrian",
      number: "01",
      role: "THE GOALKEEPER",
      teaser: "47 ideas before breakfast, but first things first... what's for food? 😂",
      bio: "The goalkeeper of the crew! 🧤 Adrian was the last line of defence on the pitch, but his mind is always somewhere creating the next big thing. Give him five minutes and he might come back with a business idea, a new project, or another plan for the future. But there's one thing that can interrupt all that thinking: food. 😂 And please, don't call him Mwakenya unless you're ready for the reaction. Big dreams, creative energy, an appetite for life, and an appetite for food — that's Adrian.",
      quote: "I can save the goal, build the idea, and still ask who's buying food after the match. 😂",
      portrait: "assets/images/adrian/adrian-1.jpg",
      photos: [
        "assets/images/adrian/adrian-1.jpg",
        "assets/images/adrian/adrian-2.jpg",
        "assets/images/adrian/adrian-3.jpg"
      ],
      song: "adrian"
    },

    karanja: {
      name: "Karanja",
      number: "02",
      role: "MALIK · THE FORMER CAPTAIN",
      teaser: "Changed his name to Malik for the ladies. Bro is recruiting from every department. 😭😂",
      bio: "Meet Karanja, famously known as Malik — a name change that definitely wasn't just for the CV. 😂😭 Rumour has it, bro wanted a name with a little more romantic marketing power, and honestly, he committed to the rebrand! Once the captain leading the boys on the pitch, he's now busy trying to lead in the relationship league. His type? Let's just say he doesn't believe in limiting his options. Tall, short, quiet, loud — if she's a girl and the conversation is flowing, Malik is ready to submit his application. 💀😂 Getting him to show up for football can be harder than finding a missing boot because the ladies might have already booked his schedule. Former captain of the team, full-time chairman of the Lovers Association. Karanja became Malik, but the boys still know the original suspect. 🤣",
      quote: "I changed my name to Malik for better chances. Don't hate the player, hate the rebrand. 😭😂",
      portrait: "assets/images/karanja/karanja-1.jpg",
      photos: [
        "assets/images/karanja/karanja-1.jpg",
        "assets/images/karanja/karanja-2.jpg",
        "assets/images/karanja/karanja-3.jpg"
      ],
      song: "karanja"
    },

    anene: {
      name: "Anene",
      number: "03",
      role: "MANUH · THE CONFIDENCE BOY",
      teaser: "Confidence on 100%, defender on the pitch, and excuses ready when eFootball starts. 😂😎",
      bio: "Ladies and gentlemen, meet Anene aka Manuh — the confidence boy of Four of Four! 😎😂 This brother carries himself like the main character, and nobody can convince him otherwise. Walks in with confidence, talks with confidence, and probably has confidence in plans that the rest of us haven't even heard about yet. 💀 On the pitch, he played defender and was connected to the Night Wings local football scene. But when someone mentions eFootball, suddenly the confidence enters airplane mode. 😭😂 One minute he's ready for everything; the next, there are mysterious reasons why the match cannot happen. Still, Manuh brings the energy, the jokes, and that unmistakable confidence that makes him part of the original Four. Whether he's defending the goal or defending his excuses, bro always has something to say. 🤣",
      quote: "Confidence is free, bro. And Manuh has an unlimited subscription. 😎😂",
      portrait: "assets/images/anene/anene-1.jpg",
      photos: [
        "assets/images/anene/anene-1.jpg",
        "assets/images/anene/anene-2.jpg",
        "assets/images/anene/anene-3.jpg"
      ],
      song: "anene"
    },

    mwaniki: {
      name: "Mwanikii",
      number: "04",
      role: "SPARTA · THE SHORT MKOLONI",
      teaser: "Short mkoloni, serious foodie, and a secretive legend. Small frame, BIG appetite. 😂🍗",
      bio: "SPARTAAA! 😂 The short mkoloni of the crew, a serious food lover, and one of the most secretive characters in the friendship archive. This man loves eating so much that food deserves its own section in his profile. 🍗🤣 He keeps his personal business under wraps, leaving the boys to wonder what he's really up to. Then there's the Kerotet high-school chapter and the stories involving the ladies — details that have kept the archive interesting. 👀😂 Short in height, big on appetite, and full of mysteries, Sparta proves that you don't need to be tall to leave a big impression. Four of Four would not be complete without this little legend.",
      quote: "Short mkoloni. Big appetite. Private life under maximum security. 🤣🍗🤫",
      portrait: "assets/images/mwanikii/mwanikii-1.jpg",
      photos: [
        "assets/images/mwanikii/mwanikii-1.jpg",
        "assets/images/mwanikii/mwanikii-2.jpg",
        "assets/images/mwanikii/mwanikii-3.jpg"
      ],
      song: "mwaniki"
    }
  };

  const HERO_PHOTO = "assets/images/hero/team-photo.jpg";

  const MEMORIES = [
    {
      src: "assets/images/group/memory-1.jpg",
      title: "The good old days",
      caption: "MEMORY NO. 01"
    },
    {
      src: "assets/images/group/memory-2.jpg",
      title: "Just us being us",
      caption: "MEMORY NO. 02"
    }
  ];

  const SONGS = {
    main: {
      title: "Our song",
      label: "FOUR OF FOUR",
      src: "assets/music/MAIN SONG.mpeg"
    },
    adrian: {
      title: "Adrian's track",
      label: "PERSONAL SOUNDTRACK",
      src: "assets/music/adrian.mpeg"
    },
    karanja: {
      title: "Karanja's track",
      label: "PERSONAL SOUNDTRACK",
      src: "assets/music/karanja.mpeg"
    },
    anene: {
      title: "Anene's track",
      label: "PERSONAL SOUNDTRACK",
      src: "assets/music/anene.mpeg"
    },
    mwaniki: {
      title: "Mwanikii's track",
      label: "PERSONAL SOUNDTRACK",
      src: "assets/music/mwaniki.mpeg"
    }
  };

  /* =========================================
     IMAGE PATH ALTERNATIVES
  ========================================= */

  const PATH_ALTERNATES = {
    "assets/images/mwanikii/mwanikii-1.jpg": [
      "assets/images/mwaniki/mwaniki-1.jpg",
      "assets/images/mwaniki/mwanikii-1.jpg",
      "assets/images/mwanikii/mwaniki-1.jpg"
    ],
    "assets/images/mwanikii/mwanikii-2.jpg": [
      "assets/images/mwaniki/mwaniki-2.jpg",
      "assets/images/mwaniki/mwanikii-2.jpg",
      "assets/images/mwanikii/mwaniki-2.jpg"
    ],
    "assets/images/mwanikii/mwanikii-3.jpg": [
      "assets/images/mwaniki/mwaniki-3.jpg",
      "assets/images/mwaniki/mwanikii-3.jpg",
      "assets/images/mwaniki/mwaniki-3.jpg"
    ]
  };

  const $ = (selector, root = document) =>
    root.querySelector(selector);

  const $$ = (selector, root = document) =>
    [...root.querySelectorAll(selector)];

  const lockScreen = $("#lockScreen");
  const passwordForm = $("#passwordForm");
  const passwordInput = $("#passwordInput");
  const passwordError = $("#passwordError");
  const siteContent = $("#siteContent");

  const homePage = $("#homePage");
  const profilePage = $("#profilePage");
  const profileContent = $("#profileContent");

  const backgroundMusic = $("#backgroundMusic");
  const musicPlayer = $("#musicPlayer");
  const musicTitle = $("#musicTitle");
  const musicLabel = $("#musicLabel");
  const playPauseButton = $("#playPauseButton");

  // Music-selection controls are intentionally disabled.
  const musicToggle = $("#musicToggle");
  const musicOptions = $("#musicOptions");

  const lightbox = $("#lightbox");
  const lightboxImage = $("#lightboxImage");
  const lightboxCaption = $("#lightboxCaption");
  const lightboxCount = $("#lightboxCount");

  let currentProfile = null;
  let currentGallery = [];
  let currentPhotoIndex = 0;
  let currentSongKey = "main";
  let previousFocus = null;
  let toastTimeout = null;
  let playbackRequest = 0;
  let imagesInitialized = false;
  let unlocked = false;

  /* =========================================
     GENERAL HELPERS
  ========================================= */

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);
  }

  function uniquePaths(paths) {
    return [...new Set(paths.filter(Boolean))];
  }

  function imageCandidates(path) {
    const candidates = [...(PATH_ALTERNATES[path] || [])];

    if (path.includes("/mwanikii/")) {
      candidates.push(path.replace("/mwanikii/", "/mwaniki/"));
      candidates.push(path.replace("mwanikii-", "mwaniki-"));
    }

    if (path.includes("/mwaniki/")) {
      candidates.push(path.replace("/mwaniki/", "/mwanikii/"));
      candidates.push(path.replace("mwaniki-", "mwanikii-"));
    }

    return uniquePaths([path, ...candidates]);
  }

  function showToast(message) {
    let toast = $("#toast");

    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast";
      toast.className = "toast";
      toast.setAttribute("role", "status");
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.hidden = false;

    clearTimeout(toastTimeout);

    toastTimeout = setTimeout(() => {
      toast.hidden = true;
    }, 3500);
  }

  function resolveAssetPath(path) {
    return new URL(path, document.baseURI).href;
  }

  /* =========================================
     IMAGE FALLBACK SYSTEM
  ========================================= */

  function setImageWithFallback(img, path, options = {}) {
    if (!img || !path) return;

    const candidates = imageCandidates(path);
    let attempt = 0;
    let finished = false;

    img.dataset.originalSrc = path;
    img.alt = options.alt || img.alt || "Friendship memory";
    img.classList.remove("image-missing");
    img.removeAttribute("title");

    img.onerror = () => {
      if (finished) return;

      if (attempt < candidates.length) {
        const nextPath = candidates[attempt++];
        img.src = resolveAssetPath(nextPath);
        return;
      }

      finished = true;
      img.classList.add("image-missing");
      img.alt = (options.alt || "Photo") + " — file not found";
      img.removeAttribute("src");
      img.title = "Photo file not found. Check the images folder.";

      console.error("IMAGE FAILED — checked paths:", candidates);
    };

    img.onload = () => {
      finished = true;
      img.classList.remove("image-missing");
      img.dataset.loadedSrc = img.currentSrc || img.src;
    };

    img.src = resolveAssetPath(candidates[attempt++]);
  }

  /* =========================================
     FRIEND TEASERS
  ========================================= */

  function initializeFriendTeasers() {
    Object.entries(FRIENDS).forEach(([key, friend]) => {
      const cards = $$(
        `[data-open-profile="${key}"], [data-profile="${key}"]`
      );

      cards.forEach(card => {
        let teaser = $(".friend-teaser", card);

        if (!teaser) {
          teaser = document.createElement("p");
          teaser.className = "friend-teaser";
        }

        teaser.textContent = friend.teaser;

        const nameElement = $(
          ".friend-name, .card-name, .friend-card-title, h2, h3",
          card
        );

        const callToAction = $(
          ".friend-cta, .card-cta, .friend-link",
          card
        );

        if (nameElement) {
          if (teaser.previousElementSibling !== nameElement) {
            nameElement.insertAdjacentElement("afterend", teaser);
          }
        } else if (callToAction) {
          card.insertBefore(teaser, callToAction);
        } else if (teaser.parentElement !== card) {
          card.appendChild(teaser);
        }
      });
    });
  }

  /* =========================================
     IMAGE INITIALIZATION
  ========================================= */

  function initializeImages() {
    if (imagesInitialized) return;
    imagesInitialized = true;

    const heroImage = $("#heroImage");

    if (heroImage) {
      setImageWithFallback(heroImage, HERO_PHOTO, {
        alt: "The four friends together"
      });
    }

    Object.entries(FRIENDS).forEach(([key, friend]) => {
      const cards = $$(
        `[data-open-profile="${key}"], [data-profile="${key}"]`
      );

      cards.forEach(card => {
        let img = $("img", card);

        if (!img) {
          img = document.createElement("img");
          img.alt = friend.name;

          const imageWrap = document.createElement("span");
          imageWrap.className = "friend-image-wrap";
          imageWrap.appendChild(img);

          card.insertBefore(imageWrap, card.firstChild);
        }

        setImageWithFallback(img, friend.portrait, {
          alt: friend.name
        });
      });
    });

    initializeFriendTeasers();

    const memoryGrid = $("#memoriesGrid");

    if (memoryGrid) {
      const existingCards = $$(".memory-card", memoryGrid);

      MEMORIES.forEach((memory, index) => {
        let card = existingCards[index];

        if (!card) {
          card = document.createElement("button");
          card.type = "button";
          card.className = "memory-card";
          card.dataset.memoryIndex = String(index);

          const img = document.createElement("img");
          img.alt = memory.title;
          img.loading = "lazy";

          const overlay = document.createElement("span");
          overlay.className = "memory-overlay";

          const caption = document.createElement("span");
          caption.textContent = memory.caption;

          const title = document.createElement("strong");
          title.textContent = memory.title;

          const open = document.createElement("span");
          open.className = "memory-open";
          open.textContent = "↗";

          overlay.append(caption, title, open);
          card.append(img, overlay);
          memoryGrid.appendChild(card);
        }

        const img = $("img", card);

        if (img) {
          setImageWithFallback(img, memory.src, {
            alt: memory.title
          });
        }

        card.onclick = () => openLightbox("memories", index);
      });
    }

    console.log("FOUR OF FOUR image paths:", {
      hero: HERO_PHOTO,
      adrian: FRIENDS.adrian.portrait,
      karanja: FRIENDS.karanja.portrait,
      anene: FRIENDS.anene.portrait,
      mwaniki: FRIENDS.mwaniki.portrait,
      memories: MEMORIES.map(memory => memory.src)
    });
  }

  /* =========================================
     PASSWORD / LOCK SCREEN
  ========================================= */

  function unlockSite(event) {
    if (event) event.preventDefault();
    if (unlocked) return;

    const entered = passwordInput
      ? passwordInput.value.trim()
      : "";

    if (entered !== PASSWORD) {
      if (passwordError) {
        passwordError.textContent = "That code isn't right. Try again.";
      }

      if (passwordInput) {
        passwordInput.setAttribute("aria-invalid", "true");
        passwordInput.focus();
        passwordInput.select();
      }

      return;
    }

    unlocked = true;

    if (passwordError) passwordError.textContent = "";
    if (passwordInput) passwordInput.removeAttribute("aria-invalid");

    if (lockScreen) lockScreen.hidden = true;
    if (siteContent) siteContent.hidden = false;
    if (musicPlayer) musicPlayer.hidden = false;

    document.body.classList.add("site-unlocked");

    initializeImages();

    // Start the main song after the visitor unlocks the archive.
    playSong("main");

    const hash = window.location.hash;

    if (hash && hash !== "#homePage") {
      setTimeout(() => {
        const target = $(hash);

        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }
  }

  if (passwordForm) {
    passwordForm.addEventListener("submit", unlockSite);
  }

  /* =========================================
     NAVIGATION
  ========================================= */

  function setActiveNav(targetId) {
    $$(".nav-link").forEach(link => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === targetId
      );
    });
  }

  function showHome(targetId = "#homePage") {
    if (profilePage) profilePage.hidden = true;
    if (homePage) homePage.hidden = false;

    currentProfile = null;
    setActiveNav(targetId);

    if (targetId === "#homePage") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const target = $(targetId);

      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  $("#brandHome")?.addEventListener("click", event => {
    event.preventDefault();
    showHome("#homePage");
  });

  $("#footerHome")?.addEventListener("click", event => {
    event.preventDefault();
    showHome("#homePage");
  });

  $("#homeNav")?.addEventListener("click", event => {
    event.preventDefault();
    showHome("#homePage");
  });

  $("#friendsNav")?.addEventListener("click", event => {
    event.preventDefault();
    showHome("#friendsSection");
  });

  $("#memoriesNav")?.addEventListener("click", event => {
    event.preventDefault();
    showHome("#memoriesSection");
  });

  $("#backHome")?.addEventListener("click", () => {
    showHome("#friendsSection");
  });

  /* =========================================
     FRIEND PROFILES
  ========================================= */

  function openProfile(key) {
    const friend = FRIENDS[key];

    if (!friend || !profileContent) return;

    currentProfile = key;

    const galleryHTML = friend.photos.map((path, index) => `
      <button
        class="gallery-photo"
        type="button"
        data-profile-photo="${index}"
        aria-label="Open ${escapeHTML(friend.name)} photo ${index + 1}">
        <img
          data-friend-gallery-image="${index}"
          alt="${escapeHTML(friend.name)} photo ${index + 1}"
          loading="lazy">
        <span>PHOTO ${String(index + 1).padStart(2, "0")}</span>
      </button>
    `).join("");

    profileContent.innerHTML = `
      <div class="profile-hero">
        <div class="profile-portrait">
          <img
            id="profilePortrait"
            alt="${escapeHTML(friend.name)}">
        </div>

        <div class="profile-intro">
          <p class="eyebrow">MEMBER FILE / ${friend.number} OF 04</p>
          <h1>${escapeHTML(friend.name)}<span>.</span></h1>
          <span class="profile-role">${escapeHTML(friend.role)}</span>
          <p class="profile-bio">${escapeHTML(friend.bio)}</p>
          <p class="profile-quote">“${escapeHTML(friend.quote)}”</p>

          <button
            class="button button-primary profile-song-button"
            type="button"
            data-play-friend="${key}">
            Play their track <span>♫</span>
          </button>
        </div>
      </div>

      <div class="profile-gallery-heading">
        <h2>The personal archive.</h2>
        <p>PHOTO COLLECTION / ${friend.photos.length} FILES</p>
      </div>

      <div class="profile-gallery">${galleryHTML}</div>

      <div class="profile-bottom">
        <p>One of four. Always part of the story.</p>
        <button
          class="button button-secondary"
          type="button"
          id="profileBackButton">
          ← Return to the four
        </button>
      </div>
    `;

    setImageWithFallback($("#profilePortrait"), friend.portrait, {
      alt: friend.name
    });

    $$("[data-friend-gallery-image]", profileContent).forEach(img => {
      const index = Number(img.dataset.friendGalleryImage);

      setImageWithFallback(img, friend.photos[index], {
        alt: friend.name + " photo " + (index + 1)
      });
    });

    $$("[data-profile-photo]", profileContent).forEach(button => {
      button.addEventListener("click", () => {
        openLightbox(
          "profile:" + key,
          Number(button.dataset.profilePhoto)
        );
      });
    });

    $("[data-play-friend]", profileContent)?.addEventListener("click", () => {
      playSong(friend.song);
    });

    $("#profileBackButton")?.addEventListener("click", () => {
      showHome("#friendsSection");
    });

    if (homePage) homePage.hidden = true;
    if (profilePage) profilePage.hidden = false;

    setActiveNav("");
    window.scrollTo({ top: 0, behavior: "smooth" });

    /*
      FINAL FIX:
      Opening a friend's profile automatically switches to their
      personal soundtrack. This happens directly after the visitor
      clicks the profile card.
    */
    playSong(friend.song);
  }

  /*
    FIXED PROFILE CLICK HANDLER:
    Works when the card itself is a link or button, or when a visitor
    clicks its image, title, text, or other content.
  */
  document.addEventListener("click", event => {
    const target = event.target;

    if (!(target instanceof Element)) return;

    const card = target.closest(
      "[data-open-profile], [data-profile]"
    );

    if (!card) return;

    const key =
      card.getAttribute("data-open-profile") ||
      card.getAttribute("data-profile");

    if (!key || !FRIENDS[key]) return;

    /*
      Ignore controls inside a card, but don't ignore the card itself
      when the card is an anchor or button.
    */
    const innerControl = target.closest(
      "button, a, input, select, textarea"
    );

    if (innerControl && innerControl !== card) return;

    event.preventDefault();
    openProfile(key);
  });

  /* =========================================
     LIGHTBOX / PHOTO VIEWER
  ========================================= */

  function getGallery(group) {
    if (group === "memories") {
      return MEMORIES.map(memory => ({
        src: memory.src,
        caption: memory.title
      }));
    }

    if (group.startsWith("profile:")) {
      const key = group.split(":")[1];
      const friend = FRIENDS[key];

      return friend
        ? friend.photos.map((src, index) => ({
            src,
            caption: friend.name + " — Photo " + (index + 1)
          }))
        : [];
    }

    return [];
  }

  function openLightbox(group, index) {
    currentGallery = getGallery(group);
    currentPhotoIndex = index;

    if (!currentGallery.length || !lightbox) return;

    previousFocus = document.activeElement;

    renderLightboxPhoto();

    lightbox.hidden = false;
    document.body.style.overflow = "hidden";

    $("#lightboxClose")?.focus();
  }

  function renderLightboxPhoto() {
    const photo = currentGallery[currentPhotoIndex];

    if (!photo) return;

    setImageWithFallback(lightboxImage, photo.src, {
      alt: photo.caption
    });

    if (lightboxCaption) {
      lightboxCaption.textContent = photo.caption;
    }

    if (lightboxCount) {
      lightboxCount.textContent =
        String(currentPhotoIndex + 1).padStart(2, "0") +
        " / " +
        String(currentGallery.length).padStart(2, "0");
    }

    const multiple = currentGallery.length > 1;

    if ($("#lightboxPrev")) {
      $("#lightboxPrev").hidden = !multiple;
    }

    if ($("#lightboxNext")) {
      $("#lightboxNext").hidden = !multiple;
    }
  }

  function changeLightboxPhoto(direction) {
    if (!currentGallery.length) return;

    currentPhotoIndex =
      (currentPhotoIndex + direction + currentGallery.length) %
      currentGallery.length;

    renderLightboxPhoto();
  }

  function closeLightbox() {
    if (!lightbox) return;

    lightbox.hidden = true;
    document.body.style.overflow = "";

    if (previousFocus && typeof previousFocus.focus === "function") {
      previousFocus.focus();
    }
  }

  $("#lightboxClose")?.addEventListener("click", closeLightbox);

  $("#lightboxPrev")?.addEventListener("click", () => {
    changeLightboxPhoto(-1);
  });

  $("#lightboxNext")?.addEventListener("click", () => {
    changeLightboxPhoto(1);
  });

  lightbox?.addEventListener("click", event => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", event => {
    if (lightbox && !lightbox.hidden) {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") changeLightboxPhoto(-1);
      if (event.key === "ArrowRight") changeLightboxPhoto(1);
    }

    if (event.key === "Escape" && profilePage && !profilePage.hidden) {
      showHome("#friendsSection");
    }
  });

  /* =========================================
     MUSIC PLAYER — AUTOMATIC PROFILE TRACKS
  ========================================= */

  function updateMusicUI(playing) {
    if (playPauseButton) {
      playPauseButton.textContent = playing ? "Ⅱ" : "▶";

      playPauseButton.setAttribute(
        "aria-label",
        playing ? "Pause music" : "Play music"
      );

      playPauseButton.setAttribute(
        "aria-pressed",
        playing ? "true" : "false"
      );
    }

    $(".music-disc")?.classList.toggle("playing", playing);

    if (musicPlayer) {
      musicPlayer.classList.toggle("is-playing", playing);
    }
  }

  function updateSongLabels(song) {
    if (musicTitle) musicTitle.textContent = song.title;
    if (musicLabel) musicLabel.textContent = song.label;
  }

  async function playSong(key) {
    const song = SONGS[key];

    if (!song) {
      console.error("Unknown song key:", key);
      showToast("This track isn't configured.");
      return;
    }

    if (!backgroundMusic) {
      console.error("Missing audio element: #backgroundMusic");
      showToast("The music player is missing from the HTML.");
      return;
    }

    // Don't restart a track that's already playing.
    if (
      currentSongKey === key &&
      !backgroundMusic.paused &&
      backgroundMusic.currentSrc
    ) {
      updateSongLabels(song);
      return;
    }

    const requestId = ++playbackRequest;

    currentSongKey = key;
    updateSongLabels(song);
    updateMusicUI(false);

    try {
      backgroundMusic.pause();
      backgroundMusic.currentTime = 0;

      // Clear previous sources before switching tracks.
      backgroundMusic.querySelectorAll("source").forEach(source => {
        source.remove();
      });

      backgroundMusic.removeAttribute("src");
      backgroundMusic.src = resolveAssetPath(song.src);
      backgroundMusic.load();

      console.log("TRACK SELECTED:", key);
      console.log("TRACK PATH:", song.src);

      await backgroundMusic.play();

      // Ignore an older request if a different profile was opened.
      if (requestId !== playbackRequest) return;

      updateMusicUI(true);

      console.log("NOW PLAYING:", key, backgroundMusic.currentSrc);
    } catch (error) {
      if (requestId !== playbackRequest) return;

      updateMusicUI(false);

      console.error("TRACK PLAYBACK FAILED:", {
        key,
        expectedPath: song.src,
        actualSource: backgroundMusic.currentSrc,
        error: error.message || error,
        mediaError: backgroundMusic.error
          ? backgroundMusic.error.code
          : null
      });

      showToast(
        "Couldn't play " + song.title +
        ". Check the exact audio filename in assets/music."
      );
    }
  }

  if (backgroundMusic) {
    backgroundMusic.addEventListener("play", () => {
      updateMusicUI(true);
    });

    backgroundMusic.addEventListener("pause", () => {
      updateMusicUI(false);
    });

    backgroundMusic.addEventListener("ended", () => {
      updateMusicUI(false);
    });

    backgroundMusic.addEventListener("error", () => {
      updateMusicUI(false);

      console.error("AUDIO FILE ERROR:", {
        selectedTrack: currentSongKey,
        expectedPath: SONGS[currentSongKey]?.src,
        actualSource: backgroundMusic.currentSrc || backgroundMusic.src,
        errorCode: backgroundMusic.error?.code || "unknown"
      });
    });
  }

  /*
    The player button only pauses or resumes the current track.
    It never switches back to the main song unless no track is loaded.
  */
  playPauseButton?.addEventListener("click", async () => {
    if (!backgroundMusic) return;

    if (!backgroundMusic.paused) {
      backgroundMusic.pause();
      return;
    }

    if (!backgroundMusic.currentSrc) {
      await playSong(currentSongKey);
      return;
    }

    try {
      await backgroundMusic.play();
      updateMusicUI(true);
    } catch (error) {
      console.error("Could not resume current track:", error);
      showToast("Couldn't resume the track. Check the audio file.");
    }
  });

  /*
    REMOVE THE SONG MENU:
    Hide the music-selection toggle and options if they're in the HTML.
    No song-menu click handlers are registered.
  */
  if (musicOptions) {
    musicOptions.hidden = true;
    musicOptions.setAttribute("aria-hidden", "true");
  }

  if (musicToggle) {
    musicToggle.hidden = true;
    musicToggle.setAttribute("aria-hidden", "true");
    musicToggle.setAttribute("aria-expanded", "false");
  }

  /* =========================================
     THEME TOGGLE
  ========================================= */

  const themeToggle = $("#themeToggle");
  const themeIcon = $("#themeIcon");
  const themeToggleText = $("#themeToggleText");

  function setTheme(light) {
    document.body.classList.toggle("light-theme", light);

    if (themeIcon) {
      themeIcon.textContent = light ? "☾" : "☼";
    }

    if (themeToggleText) {
      themeToggleText.textContent = light ? "Dark mode" : "Light mode";
    }

    if (themeToggle) {
      themeToggle.setAttribute(
        "aria-label",
        light ? "Switch to dark theme" : "Switch to light theme"
      );

      themeToggle.setAttribute("aria-pressed", String(light));
    }
  }

  themeToggle?.addEventListener("click", () => {
    setTheme(!document.body.classList.contains("light-theme"));
  });

  /* =========================================
     GENERAL PAGE SETUP
  ========================================= */

  const year = $("#currentYear");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  initializeImages();

  console.log("FOUR OF FOUR archive ready.");
});
