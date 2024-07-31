import React from 'react';

const MyIframe = () => {
  return (
    <div className="w-full max-w-[400px] max-h-[200px] overflow-hidden z-50 absolute right-[50px] bottom-[10px]">
      <iframe
        title="Dayspedia Embed"
        width="328"
        height="175"
        className="w-full h-full p-0 m-0 border-0 bg-transparent"
        src="https://dayspedia.com/if/digit/?v=1&iframe=eyJ3LTEyIjp0cnVlLCJ3LTExIjp0cnVlLCJ3LTEzIjp0cnVlLCJ3LTE0Ijp0cnVlLCJ3LTE1IjpmYWxzZSwidy0xMTAiOmZhbHNlLCJ3LXdpZHRoLTAiOnRydWUsInctd2lkdGgtMSI6ZmFsc2UsInctd2lkdGgtMiI6ZmFsc2UsInctMTYiOiIxNnB4IDE2cHggMjRweCIsInctMTkiOiI2NCIsInctMTciOiIxNiIsInctMjEiOnRydWUsImJnaW1hZ2UiOjEsImJnaW1hZ2VTZXQiOnRydWUsInctMjFjMCI6IiNmZmZmZmYiLCJ3LTAiOnRydWUsInctMyI6dHJ1ZSwidy0zYzAiOiIjZmZmZmZmIiwidy0zYjAiOiIxIiwidy02IjoiI2ZmZmZmZiIsInctMjAiOnRydWUsInctNCI6IiNmZmZmZmYiLCJ3LTE4Ijp0cnVlLCJ3LXdpZHRoLTJjLTAiOiIzMDAiLCJ3LTExNSI6dHJ1ZX0=&lang=en&cityid=18671"
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
};

export default MyIframe;
