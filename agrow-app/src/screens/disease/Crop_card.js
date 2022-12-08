import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Button, Title, Paragraph } from "react-native-paper";

const CreateCard = () => {
  return (
    <View>
      <Card style={Styles.container}>
        <Card.Content>
          <Title>Symptoms</Title>
        </Card.Content>
        {/* <Card.Cover source={{ uri: 'https://media.geeksforgeeks.org/wp-content/uploads/20220217151648/download3-200x200.png' }} /> */}
        <Card.Content>
          <Paragraph>
            Symptom first appears on foliage. Lower leaves show first symptom.
            Presence of brown dead spots on leaves, and presence of the extended
            dead areas on leaves. At first, this will look like chlorotic, then
            it turns brownish black. The size of the spots in not fix. Dead
            areas appears at the tip of leaf or the margin, from where it spread
            downward and inward. Moist condition deteriorates the leaves very
            soon. Wet rot is common in these situations. Dry condition may cause
            the curling of leaves with hard leaf surface.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Expand</Button>
        </Card.Actions>
      </Card>
      <Card style={Styles.container}>
        <Card.Content>
          <Title>Presence of purplish lession</Title>
        </Card.Content>
        {/* <Card.Cover source={{ uri: 'https://media.geeksforgeeks.org/wp-content/uploads/20220217151648/download3-200x200.png' }} /> */}
        <Card.Content>
          <Paragraph>
            It is one of the characteristic symptom. A zone outside the purplish
            lession shows a paler than normal green merging into the latter. On
            the lower side of the leaf apposite to this zone a mildew growth
            appears which is whitish or grayish. This whitish area consists of
            the aerial fructification of the pathogen. Mildew appears in dry
            season. In cool moist weather, the pathogen becomes active and
            corresponding symptoms, and progress reappear.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Expand</Button>
        </Card.Actions>
      </Card>
      <Card style={Styles.container}>
        <Card.Content>
          <Title>Symptoms of tuber infection</Title>
        </Card.Content>
        {/* <Card.Cover source={{ uri: 'https://media.geeksforgeeks.org/wp-content/uploads/20220217151648/download3-200x200.png' }} /> */}
        <Card.Content>
          <Paragraph>
            The first sign of tube infection is a brown to purple discoloration
            of the skin. Latter, it turns into a brownish dry rot, which is
            about a half an inch below the surface. Heavy infestation causes
            rotting of tubers. In moist atmosphere, white tufts of mycelium and
            sporangiophores of the fungus appear on the surface of the tuber in
            the stores.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Expand</Button>
        </Card.Actions>
      </Card>
      <Card style={Styles.container}>
        <Card.Content>
          <Title>Management of the disease</Title>
        </Card.Content>
        {/* <Card.Cover source={{ uri: 'https://media.geeksforgeeks.org/wp-content/uploads/20220217151648/download3-200x200.png' }} /> */}
        <Card.Content>
          <Paragraph>
            <ul>
                <li>Selection of seed tubers</li>
                <li>Sanitation</li>
                <li>Time of harvesting</li>
                <li>Sorting of tubers</li>
                <li>Treatment before storage</li>
                <li>Storage</li>
                <li>Riding</li>
                <li> Chemical Treatment</li>
            </ul>
         </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Expand</Button>
        </Card.Actions>
      </Card>
      <Card style={Styles.container}>
        <Card.Content>
          <Title>Symptoms</Title>
        </Card.Content>
        {/* <Card.Cover source={{ uri: 'https://media.geeksforgeeks.org/wp-content/uploads/20220217151648/download3-200x200.png' }} /> */}
        <Card.Content>
          <Paragraph>
            Symptom first appears on foliage. Lower leaves show first symptom.
            Presence of brown dead spots on leaves, and presence of the extended
            dead areas on leaves. At first, this will look like chlorotic, then
            it turns brownish black. The size of the spots in not fix. Dead
            areas appears at the tip of leaf or the margin, from where it spread
            downward and inward. Moist condition deteriorates the leaves very
            soon. Wet rot is common in these situations. Dry condition may cause
            the curling of leaves with hard leaf surface.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Expand</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};
export default CreateCard;

const Styles = StyleSheet.create({
  container: {
    alignContent: "center",
    margin: 37,
  },
});
