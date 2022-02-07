import React, { ChangeEvent, FC, useEffect, useState } from 'react';

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

const Filter: FC = () => {
  const [checkedMethods, SetCheckedMethods] = useState<string[]>([]);
  const [checkedMaterials, SetCheckedMaterials] = useState<string[]>([]);

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

  return (
    <div>
      <div>
        <div>
          <p>가공방식</p>
          <span>{checkedMethods.length}</span>
          <img alt="이미지" />
        </div>
        <ul>
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
        </ul>
      </div>

      <section>
        <div>
          <p>재료</p>
          <span>{checkedMaterials.length}</span>
          <img alt="이미지" />
        </div>
        <ul>
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
        </ul>
      </section>
      <section>
        <button type="button" onClick={clickOnResetChecked}>
          <img alt="되돌리기" />
          <p>필터링 리셋</p>
        </button>
      </section>
    </div>
  );
};

export default Filter;
