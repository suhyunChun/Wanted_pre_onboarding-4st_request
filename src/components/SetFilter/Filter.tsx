import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import styled from 'styled-components';

const methods = [
  { id: 0, name: '밀링', select: false },
  { id: 1, name: '선방', select: false },
];

const materials = [
  { id: 0, name: '알루미늄', select: false },
  { id: 1, name: '탄소강', select: false },
  { id: 2, name: '구리', select: false },
  { id: 3, name: '합금강', select: false },
  { id: 4, name: '강철', select: false },
];

/* interface Dropbox = {
  methodsUl: boolean;
} */

type Dropbox = { methodsUl: boolean; materialsUl: boolean };

const Filter: FC = () => {
  const [checkedMethods, SetCheckedMethods] = useState<string[]>([]);
  const [checkedMaterials, SetCheckedMaterials] = useState<string[]>([]);
  const [dropboxIsActive, SetDropboxIsActive] = useState<Dropbox>({ methodsUl: false, materialsUl: false });

  const handleChangeMethod = (e: ChangeEvent<HTMLInputElement>): void => {
    const { checked, name } = e.target;
    if (checked) {
      SetCheckedMethods([...checkedMethods, name]);
    } else {
      SetCheckedMethods(checkedMethods.filter((method) => method !== name));
    }
  };

  const handleChangeMaterial = (e: ChangeEvent<HTMLInputElement>): void => {
    const { checked, name } = e.target;
    if (checked) {
      SetCheckedMaterials([...checkedMaterials, name]);
    } else {
      SetCheckedMaterials(checkedMaterials.filter((material) => material !== name));
    }
  };

  const clickOnResetChecked = (): void => {
    SetCheckedMethods([]);
    SetCheckedMaterials([]);
  };

  const showMethodBox = (): void => {
    SetDropboxIsActive({ ...dropboxIsActive, methodsUl: true });
  };

  const hiddenMethodBox = (): void => {
    SetDropboxIsActive({ ...dropboxIsActive, methodsUl: false });
  };

  const showMaterialBox = (): void => {
    SetDropboxIsActive({ ...dropboxIsActive, materialsUl: true });
  };

  const hiddenMaterialBox = (): void => {
    SetDropboxIsActive({ ...dropboxIsActive, materialsUl: false });
  };

  return (
    <FilteringLayout>
      <section onMouseEnter={showMethodBox} onMouseLeave={hiddenMethodBox}>
        <DropdownBtn type="button">
          <p>가공방식{checkedMethods.length > 0 && <span>({checkedMethods.length})</span>}</p>
          <img alt="이미지" src="Image/arrowDropDown.png" />
        </DropdownBtn>
        {dropboxIsActive.methodsUl && (
          <UlBox>
            {methods.map((method) => {
              return (
                <li key={method.id}>
                  <input
                    type="checkbox"
                    name={method.name}
                    onChange={(e) => handleChangeMethod(e)}
                    checked={!!checkedMethods.includes(method.name)}
                  />
                  {method.name}
                </li>
              );
            })}
          </UlBox>
        )}
      </section>

      <section onMouseEnter={showMaterialBox} onMouseLeave={hiddenMaterialBox}>
        <DropdownBtn type="button">
          <p>재료 {checkedMaterials.length > 0 && <span>({checkedMaterials.length})</span>}</p>
          <img alt="이미지" src="Image/arrowDropDown.png" />
        </DropdownBtn>
        {dropboxIsActive.materialsUl && (
          <UlBox>
            {materials.map((material) => {
              return (
                <li key={material.id}>
                  <input
                    type="checkbox"
                    name={material.name}
                    onChange={(e) => handleChangeMaterial(e)}
                    checked={!!checkedMaterials.includes(material.name)}
                  />
                  {material.name}
                </li>
              );
            })}
          </UlBox>
        )}
      </section>

      {(checkedMethods.length > 0 || checkedMaterials.length > 0) && (
        <section>
          <RefreshBtn type="button" onClick={clickOnResetChecked}>
            <img alt="되돌리기" src="Image/refresh_24px.png" />
            <p>필터링 리셋</p>
          </RefreshBtn>
        </section>
      )}
    </FilteringLayout>
  );
};

const FilteringLayout = styled.div`
  display: flex;
`;

const DropdownBtn = styled.button`
  width: 98px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #939fa5;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > p,
  span {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
  }
`;

const UlBox = styled.ul`
  background: #ffffff;
  border: 1px solid #939fa5;
  border-radius: 4px;
  padding-left: 12px;
  padding-right: 64px;
  padding-top: 17px;
  padding-bottom: 17px;
  & > li {
    font-family: Noto Sans KR Medium;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    align-items: center;
    margin: 5px 0;
  }
  & input {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }
`;

const RefreshBtn = styled.button`
  background: #ffffff;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  font-family: Noto Sans KR Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #2196f3;
  & > img {
    margin-right: 12px;
  }
`;

export default Filter;
