import React, {useState} from 'react';
import RNModal from 'react-native-modal';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import styles, {
  FiltersModalContainer,
  FiltersModalHeader,
  CloseButtonWrapper,
  FilterButton,
  FilterButtonText,
  FiltersModalFooter,
} from './styles';
import {FiltersChips} from './components';

export interface FiltersModalProps {
  isVisible: boolean;
  onClose: (filters?: any) => void;
}

interface FiltersState {
  category: string | null;
  year: string | null;
}

export const FiltersModal = ({
  isVisible,
  onClose,
}: FiltersModalProps): JSX.Element => {
  const [filters, setFilters] = useState<FiltersState>({
    category: null,
    year: null,
  });
  const handleClose = (filtersData?: FiltersState) => {
    onClose(filtersData || null);
  };

  const handleChange = (fieldName: 'category' | 'year') => (option: string) => {
    if (filters[fieldName] === option) {
      setFilters({...filters, [fieldName]: null});
    } else {
      setFilters({...filters, [fieldName]: option});
    }
  };

  return (
    <RNModal
      testID="filtersModal"
      style={styles.modal}
      isVisible={isVisible}
      onBackdropPress={() => handleClose()}>
      <FiltersModalContainer>
        <FiltersModalHeader>
          <CloseButtonWrapper
            testID="closeButton"
            onPress={() => handleClose()}>
            <MIcon name="close" size={24} />
          </CloseButtonWrapper>
        </FiltersModalHeader>
        <FiltersChips
          testID="Category"
          title="Selecione a categoria"
          options={['Design', 'UX Design', 'UI Design']}
          value={filters.category}
          onChange={handleChange('category')}
        />
        <FiltersChips
          testID="Year"
          title="Selecione o ano"
          options={['1998', '2000', '2002']}
          value={filters.year}
          onChange={handleChange('year')}
        />
        <FiltersModalFooter>
          <FilterButton
            testID="filterButton"
            onPress={() => handleClose(filters)}>
            <FilterButtonText>Filtrar</FilterButtonText>
          </FilterButton>
        </FiltersModalFooter>
      </FiltersModalContainer>
    </RNModal>
  );
};
