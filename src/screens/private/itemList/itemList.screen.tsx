import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import UseItemList from './hooks/useItemList.hook';
import HeaderItemListComponent from './components/headerItemList.componment';
import {blueColor, height, literataRegular, whiteColor, width} from '../../../utils/style.constanst';
import ItemCardComponent from '../../../components/itemCard/itemCard.component';
import {imgOnboarding} from '../../../utils/img.constanst';

const ItemListScreen = () => {
  const {itemName, categoryName, items, itemType} = UseItemList();

  return (
    <View style={styles.container}>
      <HeaderItemListComponent
        itemType={itemName}
        categoryName={categoryName}
      />
      <View
        style={[
          styles.containerList,
          items.length === 0
            ? {justifyContent: 'center', alignItems: 'center', paddingBottom: 120}
            : {},
        ]}>
        {items.length > 0 ? (
          <FlatList
            data={items}
            renderItem={({item}) => (
              <ItemCardComponent
                data={item}
                itemType={itemType}
                categoryName={categoryName}
              />
            )}
            contentContainerStyle={styles.list}
            numColumns={1}
          />
        ) : (
          <View style={styles.errorContainer}>
            <Image style={styles.img} source={{uri: imgOnboarding.cupidBoi}} />
            <Text style={styles.errorText}>
              Not {itemName} availabe under this category.
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 1,
    height: height * 0.9,
    alignItems: 'center',
    backgroundColor: blueColor,
    gap: height * 0.035,
  },
  containerList: {
    width: width * 1,
    height: height * 0.75,
  },
  list: {
    width: width * 1,
    alignItems: 'center',
    gap: height * 0.03,
    paddingTop: 10,
  },
  errorContainer: {
    alignItems: 'center',
    gap: 15
  },
  img: {
    height: height * 0.3,
    width: width * 0.5
  },
  errorText: {
    color: whiteColor,
    fontFamily: literataRegular,
    width: width * 0.7,
    textAlign: 'center'
  },
});

export default ItemListScreen;
