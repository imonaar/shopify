import styles from "./Description.module.scss";

export default function Description() {
  return (
    <div className={styles.description}>
      <span>
        You may have seen Orion's belt before -- but not like this. The three
        bright stars across this image are, from left to right, Mintaka,
        Alnilam, and Alnitak: the iconic belt stars of Orion. The rest of the
        stars in the frame have been digitally removed to highlight the
        surrounding clouds of glowing gas and dark dust. Some of these clouds
        have intriguing shapes, including the Horsehead and Flame Nebulas, both
        near Alnitak on the lower right. This deep image, taken last month from
        the Marathon Skypark and Observatory in Marathon, Texas, USA, spans
        about 5 degrees, required about 20 hours of exposure, and was processed
        to reveal the gas and dust that we would really see if we were much
        closer. The famous Orion Nebula is off to the upper right of this
        colorful field. The entire region lies only about 1,500 light-years
        distant and so is one of the closest and best studied star formation
        nurseries known. Tonight: APOD Editor to Present the Best Space Images
        of 2021
      </span>
    </div>
  );
}