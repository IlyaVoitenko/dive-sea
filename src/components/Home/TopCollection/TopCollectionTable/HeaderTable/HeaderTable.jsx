const HeaderTable = () => {
  return (
    <thead>
      <tr className="font-poppins text-[#93989A]  font-medium   text-center  tableHeaderTr">
        <th className=" text-left">Collection</th>
        <th>Volume</th>
        <th className="mobile:hidden">24h %</th>
        <th className="mobile:hidden">Floor Price</th>
        <th className="mobile:hidden">Owners</th>
        <th className="mobile:hidden">Items</th>
      </tr>
    </thead>
  );
};

export default HeaderTable;
