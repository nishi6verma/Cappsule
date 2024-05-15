import { motion } from "framer-motion";
import NotAvailable from "./NotAvailable";
import Capsule from "../ui/Capsule";
import Pricing from "./Pricing";
import { useState } from "react";
import { useEffect } from "react";
import calculatePrice from "../../utils/calculatePrice";
import checkPackings from "../../utils/checkPackings";
import checkStrength from "../../utils/checkStrength";
import Options from "./Options";

const Card = ({ salt }) => {
  const [selectedForm, setSelctedForm] = useState(
    Object.keys(salt.salt_forms_json)[0]
  );
  const [selectedStrength, setSelctedStrength] = useState(
    Object.keys(salt.salt_forms_json[selectedForm])[0]
  );
  const [selectedPacking, setSelectedPacking] = useState(
    Object.keys(salt.salt_forms_json[selectedForm][selectedStrength])[0]
  );

  const [availableForms, setAvailableForms] = useState(salt.available_forms);
  const [availableStrengths, setAvailableStrengths] = useState([]);
  const [availablePackaging, setAvailablePackaging] = useState([]);

  useEffect(() => {
    const availableStrengths = [];
    for (let i in salt.salt_forms_json[selectedForm]) {
      availableStrengths.push(i);
    }
    setAvailableStrengths(availableStrengths);

    const availablePackaging = [];
    for (let i in salt.salt_forms_json[selectedForm][selectedStrength]) {
      availablePackaging.push(i);
    }
    setAvailablePackaging(availablePackaging);
  }, [selectedForm, selectedStrength, selectedPacking]);
  useEffect(() => {
    setSelectedPacking(
      Object.keys(salt.salt_forms_json[selectedForm][selectedStrength])[0]
    );
  }, [selectedForm, selectedStrength]);
  const forms = availableForms.map((form) => (
    <Capsule
      key={form}
      variant={selectedForm === form ? "selected" : "primary"}
      text={form}
      onClick={() => {
        setSelctedForm(form);
        setSelctedStrength(Object.keys(salt.salt_forms_json[form])[0]);
      }}
    />
  ));
  const strengths = availableStrengths.map((strength) => {
    if (!checkStrength(salt.salt_forms_json[selectedForm][strength]))
      return (
        <Capsule
          key={strength}
          variant={selectedStrength === strength ? "dashedSelected" : "dashed"}
          text={strength}
          onClick={() => {
            setSelctedStrength(strength);
            setSelectedPacking(
              Object.keys(salt.salt_forms_json[selectedForm][strength])[0]
            );
          }}
        />
      );
    return (
      <Capsule
        key={strength}
        variant={selectedStrength === strength ? "selected" : "primary"}
        text={strength}
        onClick={() => {
          setSelctedStrength(strength);
          setSelectedPacking(
            Object.keys(salt.salt_forms_json[selectedForm][strength])[0]
          );
        }}
      />
    );
  });
  const packings = availablePackaging.map((packing) => {
    if (
      !checkPackings(
        salt.salt_forms_json[selectedForm][selectedStrength][packing]
      )
    )
      return (
        <Capsule
          key={packing}
          variant={packing === selectedPacking ? "dashedSelected" : "dashed"}
          text={packing}
          onClick={() => {
            setSelectedPacking(packing);
          }}
        />
      );
    return (
      <Capsule
        key={packing}
        variant={packing === selectedPacking ? "selected" : "primary"}
        text={packing}
        onClick={() => {
          setSelectedPacking(packing);
        }}
      />
    );
  });
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      className="flex items-center justify-between custom-shadow rounded-lg p-6 bg-gradient-to-r from-white to-primary-aqua to-[1000%]"
    >
      <div className="flex flex-col gap-5 w-1/3 text-sm">
        <Options category="Form" options={forms} />
        <Options category="Strength" options={strengths} />
        <Options category="Packing" options={packings} />
      </div>
      <div className="w-1/3 text-center">
        <h1 className="font-bold">{salt.salt}</h1>
        <p className="text-slate-600">
          {selectedForm} | {selectedStrength} | {selectedPacking}
        </p>
      </div>
      <div className="flex w-1/3 justify-center">
        {/* <NotAvailable/> */}
        <Pricing
          price={calculatePrice(
            salt.salt_forms_json[selectedForm][selectedStrength][
              selectedPacking
            ]
          )}
        />
      </div>
    </motion.div>
  );
};

export default Card;
