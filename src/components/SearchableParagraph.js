const SearchableParagraph = ({ keyword }) => {
  const text =
    "The Cultural Destruction of Native Americans by Europeans Introduction: The arrival of Europeans in the Americas in the 15th century marked thebeginning of a tumultuous era for the indigenous peoples who had inhabited the land for thousands of years. The encounter between Native Americans and Europeans led to a widespread and systematic destruction of indigenous cultures. This essay aims to examine the cultural destruction inflicted upon Native Americans by Europeans, highlighting key aspects such as forced assimilation, displacement, disease, and the loss of traditional practices and knowledge. Forced Assimilation: One of the most devastating consequences of European colonization was the forced assimilation of Native Americans. Europeans sought to impose their own cultural norms, values, and beliefs upon the indigenous peoples. Native American languages, religions, and customs were often suppressed, and indigenous children were forcibly removed from their families and sent to boarding schools where they were forced to adopt European customs and abandon their native heritage. This deliberate erasure of indigenous identities caused immense trauma and disrupted the transmission of cultural knowledge from one generation to another. Displacement and Loss of Land: The arrival of Europeans in the Americas brought about widespread displacement of Native American populations. Europeans coveted the vast lands inhabited by indigenous peoples, leading to the encroachment and seizure of their territories. Native Americans were often forced onto reservations or subjected to forced relocations, disrupting their established ways of life and severing their deep connections to the land. The loss of ancestral territories not only led to physical displacement but also resulted in a profound loss of cultural identity and connection to their heritage.";

  const words = text.split(" ");

  const paraOne = (
    <section className="text-neutral-950 font-Pangolin">
      {words.map((word, index) => {
        const isPrefixMatch = word
          .toLocaleLowerCase()
          .startsWith(keyword.toLocaleLowerCase());

        if (isPrefixMatch) {
          return (
            <span key={index} className="bg-green-600">
              {word}
            </span>
          );
        }

        return " " + word + " ";
      })}
    </section>
  );

  const paraTwo = (
    <section className="text-neutral-950 font-Pangolin">{text}</section>
  );

  return keyword === "" ? paraTwo : paraOne;
};

export default SearchableParagraph;
