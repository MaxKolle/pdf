// @flow

import React, {Component} from 'react';
import {TouchableOpacity, FlatList, Modal} from 'react-native';
import {
  Container,
  ModalContainer,
  Header,
  ArrowIcon,
  GapView,
  FilterText,
  QuestionText,
  DishesTypesSectionContainer,
  MaxDistanceSectionContainer,
  ApplyButton,
  ApplyButtonText,
} from './style';
import FilterDishesTypeListItem from './FilterDishesTypeListItem';
import dishesTypesItem from './DISHES_TYPES_ITEMS';
import MaxDistance from './MaxDistanceFilter';

type Props = {
  lastDishesTypesChosen: Array<string>,
  onApplyFilterParams: Function,
  lastDistanceChosen: number,
  onToggleModal: Function,
};

type State = {
  dishesTypes: Array<string>,
  currentDistance: number,
};

class FilterModal extends Component<Props, State> {
  state = {
    currentDistance: 1,
    dishesTypes: [],
  };

  componentDidMount() {
    const {lastDishesTypesChosen, lastDistanceChosen} = this.props;

    this.setState({
      currentDistance: lastDistanceChosen || 1,
      dishesTypes: lastDishesTypesChosen,
    });
  }

  onChangeDistance = (currentDistance: number): void => {
    this.setState({
      currentDistance,
    });
  };

  onAddDishesTypeFilter = (disheType: string): void => {
    const {dishesTypes} = this.state;

    this.setState({
      dishesTypes: [...dishesTypes, disheType],
    });
  };

  onRemoverDishesTypeFilter = (disheType: string): void => {
    const {dishesTypes} = this.state;

    this.setState({
      dishesTypes: dishesTypes.filter(filter => filter !== disheType),
    });
  };

  checkDisheTypeAlreadySelected = (item: string): boolean => {
    const {lastDishesTypesChosen} = this.props;

    const isDishesTypeItemAlreadySelected =
      lastDishesTypesChosen.indexOf(item) >= 0;

    return isDishesTypeItemAlreadySelected;
  };

  renderHeader = () => {
    const {onToggleModal} = this.props;

    return (
      <Header>
        <TouchableOpacity onPress={onToggleModal}>
          <ArrowIcon />
        </TouchableOpacity>
        <FilterText>Filter</FilterText>
        <GapView />
      </Header>
    );
  };

  renderDishesTypesSection = () => (
    <DishesTypesSectionContainer>
      <QuestionText>Which kind of dish you're looking for?</QuestionText>
      <FlatList
        renderItem={({item, index}) => (
          <FilterDishesTypeListItem
            onRemoverDisheTypeFilter={disheType =>
              this.onRemoverDishesTypeFilter(disheType)
            }
            onAddDisheTypeFilter={disheType =>
              this.onAddDishesTypeFilter(disheType)
            }
            isItemAlreadySelected={this.checkDisheTypeAlreadySelected(item.id)}
            imageURI={item.imageURI}
            isFirst={index === 0}
            title={item.title}
            id={item.id}
          />
        )}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={dishesTypesItem}
        horizontal
      />
    </DishesTypesSectionContainer>
  );

  renderMaxDistanceSection = () => {
    const {currentDistance} = this.state;

    return (
      <MaxDistanceSectionContainer lastDistanceChoiced={currentDistance}>
        <QuestionText>Maximum distance you can travel?</QuestionText>
        <MaxDistance
          onChangeDistance={this.onChangeDistance}
          currentDistance={currentDistance}
        />
      </MaxDistanceSectionContainer>
    );
  };

  render() {
    const {onApplyFilterParams, onToggleModal} = this.props;
    const {currentDistance, dishesTypes} = this.state;

    return (
      <Modal
        onRequestClose={onToggleModal}
        animationType="slide"
        hardwareAccelerated
        transparent>
        <Container>
          <ModalContainer>
            {this.renderHeader()}
            {this.renderDishesTypesSection()}
            {this.renderMaxDistanceSection()}
            <ApplyButton
              onPress={() => onApplyFilterParams(currentDistance, dishesTypes)}>
              <ApplyButtonText>APPLY FILTERS</ApplyButtonText>
            </ApplyButton>
          </ModalContainer>
        </Container>
      </Modal>
    );
  }
}

export default FilterModal;
