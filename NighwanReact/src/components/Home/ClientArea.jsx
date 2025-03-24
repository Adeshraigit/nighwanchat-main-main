import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable'; // Keep Draggable if needed
import client1 from '../../assets/imgs/1.png';   
import client2 from '../../assets/imgs/2.png';   
import client3 from '../../assets/imgs/3.png';   
import client4 from '../../assets/imgs/4.png';   
import client5 from '../../assets/imgs/5.png';   
import client6 from '../../assets/imgs/6.png';   
import client7 from '../../assets/imgs/7.png';
import client8 from '../../assets/imgs/8.png';
import client9 from '../../assets/imgs/9.png';
import client10 from '../../assets/imgs/10.png';
import client11 from '../../assets/imgs/11.png';  
import client12 from '../../assets/imgs/12.png';  
import '../../assets/css/swiper-bundle.min.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS

// Register GSAP plugins (only Draggable)
gsap.registerPlugin(Draggable);

const ClientArea = () => {
  useEffect(() => {
    // GSAP horizontal loop logic (without InertiaPlugin)
    const horizontalLoop = (items, config) => {
      items = gsap.utils.toArray(items);
      config = config || {};
      let tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: 'none' },
        onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
      });
      let length = items.length;
      let startX = items[0].offsetLeft;
      let times = [],
        widths = [],
        xPercents = [];
      let curIndex = 0;
      let pixelsPerSecond = (config.speed || 1) * 100;
      let snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1);
      let totalWidth;

      const populateWidths = () => {
        items.forEach((el, i) => {
          widths[i] = parseFloat(gsap.getProperty(el, 'width', 'px'));
          xPercents[i] = snap(
            (parseFloat(gsap.getProperty(el, 'x', 'px')) / widths[i]) * 100 + gsap.getProperty(el, 'xPercent')
          );
        });
      };

      const getTotalWidth = () => {
        return (
          items[length - 1].offsetLeft +
          (xPercents[length - 1] / 100) * widths[length - 1] -
          startX +
          items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], 'scaleX') +
          (parseFloat(config.paddingRight) || 0)
        );
      };

      populateWidths();
      gsap.set(items, { xPercent: (i) => xPercents[i] });
      gsap.set(items, { x: 0 });
      totalWidth = getTotalWidth();

      for (let i = 0; i < length; i++) {
        let item = items[i];
        let curX = (xPercents[i] / 100) * widths[i];
        let distanceToStart = item.offsetLeft + curX - startX;
        let distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, 'scaleX');
        tl.to(
          item,
          {
            xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
            duration: distanceToLoop / pixelsPerSecond,
          },
          0
        )
          .fromTo(
            item,
            { xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100) },
            {
              xPercent: xPercents[i],
              duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
              immediateRender: false,
            },
            distanceToLoop / pixelsPerSecond
          )
          .add('label' + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
      }

      const toIndex = (index, vars) => {
        vars = vars || {};
        if (Math.abs(index - curIndex) > length / 2) {
          index += index > curIndex ? -length : length;
        }
        let newIndex = gsap.utils.wrap(0, length, index);
        let time = times[newIndex];
        if (time > tl.time() !== index > curIndex) {
          vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
          time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
      };

      tl.next = (vars) => toIndex(curIndex + 1, vars);
      tl.previous = (vars) => toIndex(curIndex - 1, vars);
      tl.current = () => curIndex;
      tl.toIndex = (index, vars) => toIndex(index, vars);
      tl.updateIndex = () => (curIndex = Math.round(tl.progress() * (items.length - 1)));
      tl.times = times;
      tl.progress(1, true).progress(0, true);

      if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
      }

      if (config.draggable && typeof Draggable === 'function') {
        let proxy = document.createElement('div');
        let wrap = gsap.utils.wrap(0, 1);
        let ratio, startProgress, draggable, dragSnap, roundFactor;
        const align = () => tl.progress(wrap(startProgress + (draggable.startX - draggable.x) * ratio));
        const syncIndex = () => tl.updateIndex();

        draggable = Draggable.create(proxy, {
          trigger: items[0].parentNode,
          type: 'x',
          onPress() {
            startProgress = tl.progress();
            tl.progress(0);
            populateWidths();
            totalWidth = getTotalWidth();
            ratio = 1 / totalWidth;
            dragSnap = totalWidth / items.length;
            roundFactor = Math.pow(10, ((dragSnap + '').split('.')[1] || '').length);
            tl.progress(startProgress);
          },
          onDrag: align,
          onThrowUpdate: align,
          inertia: true,
          snap: (value) => {
            let n = Math.round(parseFloat(value) / dragSnap) * dragSnap * roundFactor;
            return (n - (n % 1)) / roundFactor;
          },
          onRelease: syncIndex,
          onThrowComplete: () => gsap.set(proxy, { x: 0 }) && syncIndex(),
        })[0];
      }

      return tl;
    };

    // Initialize the marquee animation
    const loops = gsap.utils.toArray('.clients-marquee').map((line, i) => {
      const links = line.querySelectorAll('.client-logo');
      const tl = horizontalLoop(links, {
        repeat: -1,
        speed: 1 + i * 0.5,
        draggable: true,
        reversed: false,
        paddingRight: parseFloat(gsap.getProperty(links[0], 'marginRight', 'px')),
      });

      links.forEach((link) => {
        link.addEventListener('mouseenter', () => gsap.to(tl, { timeScale: 0, overwrite: true }));
        link.addEventListener('mouseleave', () => gsap.to(tl, { timeScale: i ? -1 : 1, overwrite: true }));
      });

      return tl;
    });

    // Handle scroll direction
    let currentScroll = 0;
    let scrollDirection = 1;

    window.addEventListener('scroll', () => {
      let direction = window.pageYOffset > currentScroll ? 1 : -1;
      if (direction !== scrollDirection) {
        loops.forEach((tl) => gsap.to(tl, { timeScale: direction, overwrite: true }));
        scrollDirection = direction;
      }
      currentScroll = window.pageYOffset;
    });
  }, []);

  return (
    <section className="client-area">
      <div className="clients clients-marquee d-flex align-items-center">
        <div className="client-logo simple-shadow">
          <img  src={client1} alt="Client" />
        </div>
        <div className="client-logo simple-shadow">
          <img src={client2} alt="Client" />
        </div>
        <div className="client-logo simple-shadow">
          <img src={client3} alt="Client" />
        </div>
        <div className="client-logo simple-shadow">
          <img src={client4} alt="Client" />
        </div>
        <div className="client-logo simple-shadow">
          <img src={client5} alt="Client" />
        </div>
        <div className="client-logo simple-shadow">
          <img src={client6} alt="Client" />
        </div>
        <div className="client-logo simple-shadow">
          <img src={client7} alt="Client" />
        </div>
        <div className="client-logo simple-shadow">
          <img src={client8} alt="Client" />
        </div>
        <div className="client-logo simple-shadow">
          <img src={client9} alt="Client" />
        </div>
        <div className="client-logo simple-shadow">
          <img src={client10} alt="Client" />
        </div>
        <div className="client-logo simple-shadow">
          <img src={client11} alt="Client" />
        </div>
        <div className="client-logo simple-shadow">
          <img src={client12} alt="Client" />
        </div>
        <div className="client-logo" style={{ minWidth: '0' }}></div>
      </div>
    </section>
  );
};

export default ClientArea;  